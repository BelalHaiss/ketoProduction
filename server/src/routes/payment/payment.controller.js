const User = require('../../model/user.model');
const Payment = require('../../model/payment.model');
const Price = require('../../model/price.model');

async function addPaymentToUser(theUser, payment) {
  theUser.payments.push(payment);
  await theUser.save();
}
async function addPayment(req, res, next) {
  const { priceId, category, userId, paid, isFailed } = req.body;
  const theUser = await User.findById(req.params.id);

  try {
    // check that price is same price

    if (isFailed) {
      throw new Error('failed');
    }
    const thePrice = await Price.findById(priceId);
    if (thePrice.usd !== paid || category !== thePrice.category) {
      const newPayment = await Payment.create({
        ...req.body,
        userId: req.params.id,
        status: 'success',
        createdAt: new Date(),
        fraud: true
      });

      await addPaymentToUser(theUser, newPayment);
      return res
        .status(400)
        .json({ name: 'custom', message: 'البيانات غير صحيحة' });
    }
    //  category is find on user.plans[category]
    const userSameCategory = theUser.plans?.find(
      (plans) => plans.category === category
    );
    if (userSameCategory && userSameCategory.end > Date.now()) {
      const newPayment = await Payment.create({
        ...req.body,
        userId: req.params.id,
        status: 'fail',
        createdAt: new Date(),
        alreadySubscriped: true
      });

      await addPaymentToUser(theUser, newPayment);
      return res
        .status(400)
        .json({ name: 'custom', message: 'بالفعل يوجد اشتراك فعال' });
    } else {
      const newPayment = await Payment.create({
        ...req.body,
        userId: req.params.id,
        status: 'success',
        createdAt: new Date()
      });
      await addPaymentToUser(theUser, newPayment);
      return res.json({ message: 'تم الاشتراك بنجاح' });
    }
  } catch (e) {
    const newPayment = await Payment.create({
      ...req.body,
      userId: req.params.id,
      paid: 0,
      status: 'fail',
      createdAt: new Date()
    });
    await addPaymentToUser(theUser, newPayment);
    return res
      .status(400)
      .json({ name: 'custom', message: 'حدث خطا برجاء المحاولة لاحقا ' });
  }
}

async function testAddPayment(req, res, next) {
  console.log(req.params.id);
  const { userId } = req.body;
  const theUser = await User.findById(userId);

  const newPayment = await Payment.create({
    ...req.body,
    status: 'success',
    createdAt: new Date()
  });
  await addPaymentToUser(theUser, newPayment);
  return res.json({ message: 'تم الاشتراك بنجاح' });
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
}

module.exports = { getAllPayments, addPayment, getUserPayment, testAddPayment };
