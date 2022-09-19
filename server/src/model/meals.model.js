const mongoose = require('mongoose');
const { Schema } = mongoose;
const cloudinary = require('../utils/cloudinary');
const categoryType = {
  type: String,
  enum: ['chicken', 'cow', 'sheep', 'camel', 'caridea', 'fish', 'other'],
  required: true
};
const timeType = {
  type: String,
  enum: ['breakfast', 'lunch', 'dinner', 'snack'],
  required: true
};
const categorySchema = new Schema({
  _id: categoryType,
  value: categoryType,
  label: { type: String, required: true }
});
const timeSchema = new Schema({
  _id: timeType,
  value: timeType,
  label: { type: String, required: true }
});
const mealSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true, ref: 'Category' },
    time: {
      type: String,
      required: true,
      ref: 'Time'
    },
    image: {
      type: String,
      required: true,
      get: (v) => {
        return {
          url: cloudinary.url(v),
          public_id: v
        };
      }
    },
    duration: { type: Number, required: true },
    carbs: { type: Number, required: true },
    proteins: { type: Number, required: true },
    fats: { type: Number, required: true },
    calories: { type: Number, required: true },
    components: [{ type: String, required: true }],
    steps: { type: String, required: true },
    isRemoved: { type: Boolean, default: false },
    addedBy: { type: String, required: true, minLength: 24, maxLength: 24 }
  },
  {
    toObject: { virtuals: true, getters: true }
  }
);
mealSchema.virtual('image-src').get(function () {
  return cloudinary.url(this.image);
});
// mealSchema.set('toObject', { getters: true });
const Category = mongoose.model('Category', categorySchema);
const Time = mongoose.model('Time', timeSchema);
const Meal = mongoose.model('Meal', mealSchema);

module.exports = { Category, Meal, Time };
