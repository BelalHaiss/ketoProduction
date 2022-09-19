const Workout = require('../../model/workouts.model');
const { checkSubscription } = require('../../utils/checker');

async function getAll(req, res) {
  const workouts = await Workout.find().select('-__v');
  res.json(workouts);
}
async function seedWorkout(req, res) {
  const videos = [
    {
      duration: 1,
      url: 'http://anyurl.com'
    },
    {
      duration: 1,
      url: 'http://anyurl.com'
    },
    {
      duration: 1,
      url: 'http://anyurl.com'
    }
  ];
  let workouts = [];
  for (let i = 1; i <= 31; i++) {
    workouts.push({
      label: `يوم ${i}`,
      _id: i,
      day: i,
      videos
    });
  }
  await Workout.create(workouts);
  res.json({ message: 'Workout seeded' });
}

async function getDayById(req, res) {
  // if (!checkSubscription(req.user, 'workout'))
  //   return res.status(401).json({ message: 'not subscribed' });

  const workout = await Workout.findById(req.params.id);
  res.json(workout.videos);
}

async function updateDay(req, res) {
  const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }).select('-__v');
  res.json(workout);
}

module.exports = {
  getAll,
  updateDay,
  getDayById,
  seedWorkout
};
