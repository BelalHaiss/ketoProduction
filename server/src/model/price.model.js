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
  before: { type: Number, default: 0 },
  price: { type: Number, required: true } // price after discount
});

module.exports = mongoose.model('Price', priceSchema);
