const mongoose = require('mongoose');
const { Schema } = mongoose;
const Price = require('./price.model');
const User = require('./user.model');

const subscriptionSchema = new Schema({
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  paymentId: {
    type: Schema.Types.ObjectId,
    ref: 'Payment',
    required: true
  },
  category: {
    type: String,
    enum: ['meal', 'nutritionist', 'workout'],
    required: true
  },
  priceId: {
    type: String,
    ref: 'Price',
    required: true
  }
});
subscriptionSchema.post('save', async function (doc) {
  try {
    // push subscription to user
    const theUser = await User.findById(doc.userId);
    theUser.subscriptions.push(doc._id);
    // find the price
    const thePrice = await Price.findById(doc.priceId);
    // thePrice.plans.forEach() user.plan.find(plan['category']) check if(no user plan) (expired user plan ) ( available user plan)
    thePrice.plans.forEach((plan) => {
      const theUserPlan = theUser.plans.find(
        (userPlans) => userPlans.category === plan.category
      );
      //  if(no user plan) userplan.push new one   start: new Date().toLocaleDateString(),end: copy it)
      if (!theUserPlan) {
        theUser.plans.push({
          category: plan.category,
          start: new Date().toLocaleDateString('en'),
          end: new Date(new Date().toLocaleDateString('en')).setDate(
            new Date().getDate() + plan['duration']
          )
        });
        return;
        //  if (avaible user plan) theUserPlan.end = end: increase old with plan duration
      } else if (new Date(theUserPlan.end) > new Date()) {
        theUserPlan.end = new Date(theUserPlan.end).setDate(
          new Date(theUserPlan.end).getDate() + plan['duration']
        );
        return;
        //  if(expired user plan) theUserPlan = new start and new end
      } else if (new Date(theUserPlan.end) <= new Date()) {
        theUserPlan.start = new Date().toLocaleDateString('en');
        theUserPlan.end = new Date(new Date().toLocaleDateString('en')).setDate(
          new Date().getDate() + plan['duration']
        );
      }
    });
    await theUser.save();
  } catch (error) {
    console.log(error, 'payment schema ');
  }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
