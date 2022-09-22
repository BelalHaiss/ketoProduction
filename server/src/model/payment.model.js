const mongoose = require('mongoose');
const { Schema } = mongoose;
const Subscription = require('./subscrion.model');
const Price = require('./price.model');

const paymentSchema = new Schema({
  createdAt: { type: Date, required: true },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  paid: Number,

  paypal: {
    orderId: String,
    payer: Object,
    paymentID: String,
    payerID: String,
    subscriptionID: String,
    method: String,
    status: String
  },

  status: {
    type: String,
    enum: ['success', 'fail']
  },
  category: {
    type: String,
    enum: ['meal', 'nutritionist', 'workout']
  },
  priceId: {
    type: String,
    ref: 'Price'
  },
  fraud: { type: Boolean, default: false },
  alreadySubscriped: { type: Boolean, default: false } // is already Subscriped
});

paymentSchema.post('save', async function (doc) {
  try {
    if (doc.status === 'success') {
      const thePrice = await Price.findById(doc.priceId);
      const plan = thePrice.plans.find(
        (plans) => doc.category === plans.category
      );
      await Subscription.create({
        start: new Date().toLocaleDateString('en'),
        end: new Date(new Date().toLocaleDateString()).setDate(
          new Date().getDate() + plan['duration']
        ),
        userId: doc.userId,
        paymentId: doc._id,
        category: doc.category,
        priceId: doc.priceId
      });
    }
  } catch (error) {
    console.log(error, 'payment schema ');
  }
});
module.exports = mongoose.model('Payment', paymentSchema);
