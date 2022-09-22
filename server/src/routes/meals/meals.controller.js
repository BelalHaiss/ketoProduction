const { Meal, Category, Time } = require('../../model/meals.model');
const { checkSubscription } = require('../../utils/checker');
const cloudinary = require('../../utils/cloudinary');
async function seedCategory(req, res, next) {
  const allCategories = [
    {
      label: 'الدجاج',
      value: 'chicken',
      _id: 'chicken'
    },
    {
      label: 'الاسماك',
      value: 'fish',
      _id: 'fish'
    },
    {
      label: 'الروبيان',
      value: 'caridea',
      _id: 'caridea'
    },
    {
      label: 'لحم الابقار',
      value: 'cow',
      _id: 'cow'
    },
    {
      label: 'لحم الاغنام',
      value: 'sheep',
      _id: 'sheep'
    },
    {
      label: 'لحم الجمال',
      value: 'camel',
      _id: 'camel'
    },
    {
      label: 'اخري',
      value: 'other',
      _id: 'other'
    }
  ];
  await Category.create(allCategories);
  res.json({ message: 'categories created' });
}
async function getCategories(req, res, next) {
  const categories = await Category.find({}).select('-__v');

  return res.status(200).json(categories);
}
async function seedTimes(req, res) {
  const allTimes = [
    {
      label: 'فطور',
      value: 'breakfast',
      _id: 'breakfast'
    },
    {
      label: 'غداء',
      value: 'lunch',
      _id: 'lunch'
    },
    {
      label: 'عشاء',
      value: 'dinner',
      _id: 'dinner'
    },
    {
      label: 'وجبة خفيفة',
      value: 'snack',
      _id: 'snack'
    }
  ];
  await Time.create(allTimes);
  res.json({ message: 'times created' });
}

async function getTimes(req, res) {
  const times = await Time.find({}).select('-__v');
  res.status(200).json(times);
}

//  meals.controller
async function getMeals(req, res, next) {
  if (!checkSubscription(req.user, 'meal'))
    return res.status(401).json({ message: 'not subscribed' });

  const page = req.query.page;
  if (!page) {
    res.status(400).json({ message: 'page is required' });
    return;
  }
  const userCategories = req.user.categories;

  const time = req.query.time;
  if (!userCategories || !time) {
    res.status(400).json({ message: 'category or time is required' });
    return;
  }
  const pageSize = 8;
  const query = {
    category: { $in: [...userCategories, 'other'] },
    isRemoved: false,
    time
  };
  const meals = await Meal.find(query)
    .sort({ _id: -1 })
    .select('-__v')
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .populate('category', 'label value')
    .populate('time', 'label value');

  const count = await Meal.countDocuments(query);

  const pages = Math.ceil(count / pageSize);
  const isNext = count > pageSize * page;
  const isPrev = page > 1;
  res.status(200).json({
    meals: meals.map((meal) => meal.toObject()),
    pages,
    isNext,
    isPrev,
    count
  });
}

// no pagination
async function getAllMeals(req, res, next) {
  const category = req.query.category;
  const time = req.query.time;
  if (!category || !time) {
    res.status(400).json({ message: 'category or time is required' });
    return;
  }

  const query = { category, time, isRemoved: false };
  const meals = await Meal.find(query)
    .sort({ _id: -1 })
    .select('-__v')
    .populate('category', 'label value -_id')
    .populate('time', 'label value -_id');

  res.status(200).json(meals.map((meal) => meal.toObject()));
}
async function AddMeal(req, res, next) {
  let meal = await Meal.create(req.body);
  meal = await Meal.findById(meal._id)
    .populate('category', 'label value -_id')
    .populate('time', 'label value -_id');
  res.status(200).json(meal.toObject());
}
async function updateMeal(req, res, next) {
  const { id } = req.params;
  const meal = await Meal.findByIdAndUpdate(id, req.body, { new: true })
    .select('-__v')
    .populate('category', 'label value -_id')
    .populate('time', 'label value -_id');
  res.status(200).json(meal.toObject());
}

async function deleteMeal(req, res, next) {
  const { id } = req.params;
  await Meal.findByIdAndUpdate(id, { isRemoved: true });
  await cloudinary.uploader.destroy(req.body.public_id);
  res.status(200).json({ message: 'meal deleted' });
}

async function countMeals(req, res) {
  const category = req.query.category;
  if (!category) {
    res.status(400).json({ message: 'category is required' });
    return;
  }

  const categoryCounts = await Meal.countDocuments({
    category,
    isRemoved: false
  });
  const times = ['breakfast', 'lunch', 'dinner', 'snack'];
  const allTimes = times.map((time) => {
    return Meal.countDocuments({ category, time, isRemoved: false });
  });
  const [breakfast, lunch, dinner, snack] = await Promise.all(allTimes);
  res
    .status(200)
    .json({ categoryCounts, timesCounts: { breakfast, lunch, dinner, snack } });
}

async function destoryImage(req, res) {
  const { id } = req.body;

  cloudinary.uploader.destroy(id, (error, result) => {
    if (error) {
      return res.status(400).json({ message: error });
    } else if (result.result === 'ok') {
      return res.status(200).json({ message: 'image deleted' });
    } else {
      return res.status(400).json({ message: 'image not found' });
    }
  });
}

module.exports = {
  getMeals,
  AddMeal,
  updateMeal,
  deleteMeal,
  countMeals,
  getCategories,
  seedCategory,
  getAllMeals,
  destoryImage,
  seedTimes,
  getTimes
};
