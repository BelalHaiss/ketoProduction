const User = require('../../model/user.model');
const Payment = require('../../model/payment.model');
const Price = require('../../model/price.model');
const TestModel = require('../../model/test.model');
const axios = require('axios');

const { createHmac } = require('crypto');

async function addPaymentToUser(userId, payment) {
  const theUser = await User.findById(userId);
  theUser.payments.push(payment);
  await theUser.save();
}

async function getUserPayment(req, res) {
  const theUser = await User.findById(req.user._id)
    .select('payments')
    .populate({
      path: 'payments',
      options: {
        sort: {
          _id: -1
        }
      }
    });
  return res.json(theUser.payments);
}

// admin routes

async function getAllPayments(req, res) {
  const email = req.query.email;
  const date = req.query.date;
  const start = req.query.start;
  const end = req.query.end;
  const category = req.query.category;
  const status = req.query.status;
  if (!email && !category && !date && !start && !end) {
    return res.status(400).json({ msg: 'no query ' });
  }

  if (email) {
    const isFound = await User.findOne({
      'profile.email': email
    })
      .select('payments')
      .populate({
        path: 'payments',
        options: {
          sort: {
            _id: -1
          },
          limit: 50
        },
        populate: { path: 'userId', select: 'profile.name profile.lastName' }
      });
    return res.json(!isFound ? [] : isFound.payments);
  } else if (date) {
    const endDate = new Date(end);
    const payments = await Payment.find({
      createdAt: {
        $gte: new Date(start),
        $lte: new Date(endDate.setDate(endDate.getDate() + 1))
      },
      status
    })
      .populate('userId', 'profile.name profile.lastName')
      .sort({ _id: -1 })
      .limit(50);

    return res.json(payments);
  } else if (category) {
    const payments = await Payment.find({
      priceId: category,
      status
    })
      .populate('userId', 'profile.name profile.lastName')
      .sort({ _id: -1 })
      .limit(50);

    return res.json(payments);
  }
  return res.json([]);
}

async function handleTapGateway(req, res) {
  try {
    const data = req.body;
    const { id, amount, status, currency, metadata, customer } = data;
    const { gateway, payment } = data.reference;
    const created = data.transaction.created;
    const thePrice = await Price.findById(metadata.priceId);
    // await TestModel.create({ any: data });
    const SecretAPIKey = 'sk_live_1BFJ4SRCK9kmz6HTXbxf2iNM';
    const myHash = `x_id${id}x_amount${amount}.00x_currency${currency}x_gateway_reference${gateway}x_payment_reference${payment}x_status${status}x_created${created}`;
    const hash = createHmac('SHA256', SecretAPIKey)
      .update(myHash)
      .digest('hex');
    const hashstring = req.headers['hashstring'];
    const paymentData = {
      userId: metadata.userId,
      createdAt: new Date(),
      paid: amount,
      // status: status === 'captured' ? 'success' : 'fail',
      status: status === 'CAPTURED' ? 'success' : 'fail',

      paypal: { id, customer, method: data.source.payment_method },
      priceId: metadata.priceId,
      category: metadata.category,
      fraud: thePrice.price !== amount,
      hash: hashstring === hash
    };
    const newPayment = await Payment.create(paymentData);
    if (paymentData.status === 'success') {
      await addPaymentToUser(metadata.userId, newPayment);
    }
    res.json({ msg: 'done' });
  } catch (error) {
    res.json({ msg: 'done' });
  }
}

async function getPayLink(req, res) {
  const {
    callBackUrl,
    clientName,
    clientMobile,
    amount,
    orderNumber,
    clientEmail,
    userId,
    plan
  } = req.body;

  try {
    const token = await axios({
      method: 'post',
      url: process.env.PAY_LINK_URL + '/api/auth',
      data: {
        apiId: process.env.AP_ID,
        persistToken: false,
        secretKey: process.env.SECRET_KEY
      }
    });

    if (token.data?.id_token) {
      global.token = token.data?.id_token;

      const payLink = await axios({
        method: 'post',
        url: process.env.PAY_LINK_URL + '/api/addInvoice',
        data: {
          amount,
          callBackUrl: process.env.BASE_URL + 'api/payments/check_payment',
          clientName,
          clientMobile,
          amount,
          orderNumber,
          clientEmail,
          note: JSON.stringify({ callBackUrl, userId, plan })
        },
        headers: { Authorization: 'Bearer ' + token.data?.id_token }
      });

      // console.log(payLink.data);
      if (payLink.data?.url) return res.send(payLink.data?.url);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: 'برجاء المحاولة لاحقا'
    });
  }
}

async function checkPayment(req, res) {
  const { transactionNo } = req.query;
  console.log(global.token, transactionNo);

  try {
    const payLink = await axios({
      method: 'get',
      url: process.env.PAY_LINK_URL + '/api/getInvoice/' + transactionNo,
      headers: { Authorization: 'Bearer ' + global.token }
    });

    const { orderStatus, gatewayOrderRequest } = payLink.data;
    const { userId, plan, callBackUrl } = JSON.parse(gatewayOrderRequest.note);
    const thePrice = await Price.findById(plan._id);

    const paymentData = {
      userId,
      createdAt: new Date(),
      paid: gatewayOrderRequest.amount,
      status: orderStatus === 'Paid' ? 'success' : 'fail',
      priceId: plan._id,
      category: plan.category,
      fraud: thePrice.price !== gatewayOrderRequest.amount,
      hash: false
    };
    const newPayment = await Payment.create(paymentData);

    if (orderStatus === 'Paid') {
      await addPaymentToUser(userId, newPayment);
      res.redirect(callBackUrl);
    } else {
      res.status(400).json({
        name: 'custom',
        message: 'برجاء المحاولة لاحقا'
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      name: 'custom',
      message: 'برجاء المحاولة لاحقا'
    });
  }
}

async function getPaylinkToken(req, res) {
  try {
    const token = await axios({
      method: 'post',
      // url: "https://restapi.paylink.sa/api/auth",
      // data: {
      //   apiId: "APP_ID_1668101711541",
      //   persistToken: false,
      //   secretKey: "32a58d9e-dcb0-3d49-b23b-8d2254aa69b8",
      // },
      url: process.env.PAY_LINK_URL + '/api/auth',
      data: {
        apiId: 'APP_ID_1123453311',
        persistToken: false,
        secretKey: '0662abb5-13c7-38ab-cd12-236e58f43766'
      }
    });
    res.send(token.data.id_token);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      name: 'custom',
      message: 'برجاء المحاولة لاحقا'
    });
  }
}

module.exports = {
  getAllPayments,
  getUserPayment,
  handleTapGateway,
  getPaylinkToken,
  getPayLink,
  checkPayment
};
