const mongoose = require('mongoose');
const { Schema } = mongoose;
const requiredString = { type: String, required: true };
//  type category = 'chicken' | 'cow' | 'sheep' | 'camel' | 'caridea' | 'fish';
const userSchema = new Schema(
  {
    timeZone: { type: String },
    categories: [String],
    physicalActivity: {
      type: String,
      enum: ['sedentary', 'light', 'moderate', 'active']
      // required: true normal user
    },
    willing: {
      type: String,
      enum: ['min', 'max']
      // required: true normal user
    },
    profile: {
      name: requiredString,
      lastName: requiredString,
      email: requiredString,
      password: requiredString,
      phone: String,
      country: String
    },
    meals: {
      date: String, // new Date().toLocaleDateString()
      breakfast: [{ type: Schema.Types.ObjectId, ref: 'Meal' }],
      lunch: [{ type: Schema.Types.ObjectId, ref: 'Meal' }],
      dinner: [{ type: Schema.Types.ObjectId, ref: 'Meal' }],
      snack: [{ type: Schema.Types.ObjectId, ref: 'Meal' }]
    },
    measurements: {
      height: Number,
      weight: Number,
      age: Number,
      country: String,
      desiredWeight: Number,
      weightUpdateDate: Date,
      sex: {
        type: String,
        enum: ['male', 'female']
      }
    },
    water: {
      date: String, // new Date().toLocaleDateString('en')
      cups: { type: Number, min: 1, max: 14 }
    },
    // meals: [],
    status: [{ type: Schema.Types.ObjectId, ref: 'Status' }],
    payments: [{ type: Schema.Types.ObjectId, ref: 'Payment' }],
    subscriptions: [{ type: Schema.Types.ObjectId, ref: 'Subscription' }],
    plans: [
      {
        category: {
          type: String,
          enum: ['meal', 'nutritionist', 'workout'],
          required: true
        },
        start: Date, // new Date.toLocaleDateString('en')
        end: Date //  new Date.toLocaleDateString('en')
      }
    ],

    // properties only for admins and moderator
    role: {
      type: String,
      enum: ['admin', 'meals', 'workouts', 'subscriptions', null],
      default: null
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', userSchema);
