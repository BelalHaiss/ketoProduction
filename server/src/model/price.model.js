const mongoose = require('mongoose');
const { Schema } = mongoose;

const priceSchema = new Schema({
  _id: { type: String, required: true },
  label: { type: String, required: true },
  category: {
    type: String,
    enum: ['meal', 'nutritionist', 'workout'],
    required: true
  },
  planId: { type: String, required: true },
  plans: [
    {
      category: {
        type: String,
        enum: ['meal', 'nutritionist', 'workout'],
        required: true
      },
      duration: { type: Number, required: true, min: 7, max: 180 }
    }
  ],
  discount: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true }, // price after discount
  usd: { type: Number, required: true }
});

module.exports = mongoose.model('Price', priceSchema);
