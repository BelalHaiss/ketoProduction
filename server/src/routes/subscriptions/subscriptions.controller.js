const User = require('../../model/user.model');
const Subscription = require('../../model/subscrion.model');
const Price = require('../../model/price.model');
async function getAllSubscriptions(req, res) {
  const email = req.query.email;
  const category = req.query.category;
  if (!email && !category) {
    return res.status(400).json({ msg: 'no query' });
  }
  if (email) {
    const subscriptions = await User.findOne({
      'profile.email': email
    })
      .select('subscriptions')
      .populate({
        path: 'subscriptions',
        options: {
          sort: {
            _id: -1
          },
          limit: 50,
          populate: { path: 'userId', select: 'profile.name profile.lastName' }
        }
      });
    return res.json(!subscriptions ? [] : subscriptions.subscriptions);
  } else if (category) {
    const subscriptions = await Subscription.find({ priceId: category })
      .populate('userId', 'profile.name profile.lastName')
      .sort({ _id: -1 })
      .limit(50);

    return res.json(subscriptions);
  }
}

async function testSubscriptions(req, res) {
  const newSubs = await Subscription.create(req.body);
  res.json(newSubs);
}

async function addCustomSubscription(req, res) {
  const { userId, priceId, category } = req.body;
  const thePrice = await Price.findById(priceId);
  const plan = thePrice.plans.find((plans) => category === plans.category);
  await Subscription.create({
    start: new Date().toLocaleDateString('en'),
    end: new Date(new Date().toLocaleDateString()).setDate(
      new Date().getDate() + plan['duration']
    ),
    category,
    isFree: true,
    userId,
    priceId
  });
  res.json({ msg: 'doen' });
}
module.exports = {
  getAllSubscriptions,
  testSubscriptions,
  addCustomSubscription
};
