const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  _id: { type: Number, required: true },
  label: { type: String, required: true },
  day: { type: Number, required: true },
  videos: [{ _id: false, duration: Number, url: String }]
});

module.exports = mongoose.model('Workout', workoutSchema);
