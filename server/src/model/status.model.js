const mongoose = require('mongoose');
const { Schema } = mongoose;

const statusSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  mood: {
    type: String,
    enum: ['sleepy', 'moody', 'happy', 'tired', 'ignore', 'clear', 'active', '']
  },
  symptoms: {
    type: String,
    enum: [
      'headache',
      'bloating',
      'stomach',
      'thirsty',
      'disgust',
      'smell',
      'constipation',
      ''
    ]
  },
  date: String // new Date().toLocaleDateString('en')
});

module.exports = mongoose.model('Status', statusSchema);
