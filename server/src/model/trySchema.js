const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/date');
const { Schema } = mongoose;
process.env.TZ = 'Africa/Accra';

const trySchema = new Schema({
  start: Date,
  end: Date
});

const theDate = mongoose.model('dae', trySchema);

(async function () {
  //   const newDate = new theDate({
  //     start: new Date(2022, 7, 27),
  //     end: new Date().setDate(new Date().getDate() + 30)
  //   });
  // await newDate.save();
  //   console.log(newDate);
  //   console.log(new Date());
  //   console.log()
  //   const date = await theDate.find({
  //     start: {
  //       $gte: new Date()
  //     }
  //   });
  console.log(new Date());
  //   console.log(date);
})();
