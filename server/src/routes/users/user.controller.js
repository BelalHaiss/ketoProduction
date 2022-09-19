const bcrypt = require('bcryptjs');
const User = require('../../model/user.model');
const { Meal } = require('../../model/meals.model');
const { checkSubscription } = require('../../utils/checker');

const Status = require('../../model/status.model');
const config = require('config');
const Token = require('../../model/token.model');
const crypto = require('crypto');
const sendEmail = require('../../utils/sendMail');
async function register(req, res, next) {
  const {
    profile,
    measurements,
    physicalActivity,
    categories,
    willing,
    country
  } = req.body;

  const isFound = await User.find({
    $or: [
      { 'profile.email': profile.email },
      { 'profile.phone': profile.phone }
    ]
  });
  if (isFound.length > 0) {
    return res.status(400).json({
      name: 'custom',
      message: 'البريد الالكتروني الجوال مستخدم'
    });
  }

  const user = await User.create({
    measurements,
    willing,
    physicalActivity,
    categories,
    country,
    profile: {
      ...profile,
      password: await bcrypt.hash(profile.password, 9)
    }
  });
  user.profile.password = undefined;
  user.meals = undefined;
  req.login(user, function (err) {
    if (err) {
      console.log(err);
      return next(err);
    }
  });
  res.json(user);
}

async function login(emailOrNumber, password, done) {
  try {
    let user;

    user = await User.findOne({
      $or: [
        { ['profile.email']: emailOrNumber },
        { ['profile.phone']: emailOrNumber }
      ]
    });

    if (!user) {
      return done(null, false, { message: ' لا يوجد حساب مسجل' });
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      user.profile.password
    );
    if (!isPasswordValid) {
      return done(null, false, { message: 'خطا في كلمة السر' });
    }
    user.profile.password = undefined;
    user.meals = undefined;
    if (user.role) {
      return done(null, user);
    }
    return done(null, user);
  } catch (error) {
    done(error);
  }
}

async function getUserById(req, res, next) {
  const user = await User.findById(req.params.id, '-profile.password -meals ');
  res.json(user);
}

async function updateUserMeasurments(req, res, next) {
  const { measurements, physicalActivity, willing } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      measurements,
      physicalActivity,
      willing
    },
    {
      new: true,
      runValidators: true
    }
  ).select('-profile.password');

  res.json(user);
}
async function updateAccount(req, res, next) {
  const { name, email, country, phone, lastName } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      'profile.name': name,
      'profile.email': email,
      'profile.country': country,
      'profile.phone': phone,
      'profile.lastName': lastName
    },
    {
      new: true,
      runValidators: true
    }
  ).select('-profile.password');

  res.json(user);
}

async function logout(req, res) {
  req.logout();
  req.session = null;
  res.clearCookie('keto');
  res.clearCookie('keto.sig');
  res.json({ message: 'تم تسجيل الخروج' });
}

async function resetPasswordReq(req, res) {
  const email = req.params.email;
  const isUser = await User.findOne({ 'profile.email': email });
  if (!isUser) {
    return res
      .status(404)
      .json({ name: 'custom', message: 'لايوجد بريد الكتروني' });
  }

  const isToken = await Token.findOne({ userId: isUser._id });
  if (isToken) {
    await isToken.deleteOne();
  }
  let resetToken = crypto.randomBytes(32).toString('hex');
  const theToken = bcrypt.hashSync(resetToken, 9);

  await Token.create({
    userId: isUser._id,
    token: theToken
  });
  const init = Date.now();
  const link = `${config.get('CLIENT_URL')}/passwordreset?id=${
    isUser._id
  }&token=${theToken}&init=${init}`;
  await sendEmail(
    email,
    'نسيت كلمة المرور',
    {
      name: isUser['profile']['name'],
      link
    },
    'reset'
  );
  res.status(200).json({ message: 'تم بنجاح' });
}

async function resetPasswordRes(req, res) {
  const { userId, token, password } = req.body;
  // find token --- findUser ---- checkPassword ---- hash passwrod and saveit --- send success mail
  const isToken = await Token.findOne({
    userId,
    token
  });
  if (!isToken) {
    return res.status(404).json({ name: 'custom', message: 'خطا' });
  }
  await isToken.deleteOne();
  const hash = bcrypt.hashSync(password, 9);

  const user = await User.findByIdAndUpdate(
    userId,
    {
      $set: { 'profile.password': hash }
    },
    {
      new: true
    }
  );
  await sendEmail(
    user['profile']['email'],
    'تم تغير كلمة السر',
    {
      name: user['profile']['name']
    },
    'success'
  );
  res.status(200).json({ message: 'تم بنجاح' });
}
async function changeUserPassword(req, res, next) {
  const { password, newPassword } = req.body;
  const user = await User.findById(req.params.id);
  const isPasswordValid = await bcrypt.compare(password, user.profile.password);
  if (!isPasswordValid) {
    return res.status(404).json({ name: 'custom', message: 'كلمة السر خاطئة' });
  }
  const hash = bcrypt.hashSync(newPassword, 9);
  await User.findByIdAndUpdate(
    req.params.id,
    { 'profile.password': hash },
    {
      new: true
    }
  );
  res.status(200).json({ message: 'تم تغير كلمة السر' });
}
async function getWater(req, res, next) {
  const queryDate = req.query.date;
  if (!queryDate) {
    return res
      .status(404)
      .json({ name: 'custom', message: 'date query missing' });
  }

  const user = await User.findById(req.params.id);

  if (user.water && user.water.date === queryDate) {
    return res.json(user.water);
  }
  return res.json({
    cups: 0,
    date: queryDate
  });
}
async function addWater(req, res, next) {
  const { date, cups } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { water: { date, cups } },
    { new: true }
  );

  res.json(user.water);
}

async function addStatus(req, res, next) {
  const id = req.params.id;
  const { symptoms, date, user, mood } = req.body;
  const isStatus = await Status.findOne({ user, date });
  if (isStatus) {
    isStatus.symptoms = symptoms;
    isStatus.mood = mood;
    await isStatus.save();
    return res.json({ symptoms, mood });
  } else {
    const status = await Status.create({
      user,
      date: date,
      symptoms,
      mood
    });
    const theUser = await User.findById(id);
    theUser.status.push(status);
    await theUser.save();
    res.json(status);
  }
}

async function getStatus(req, res, next) {
  const queryDate = req.query.date;
  const user = req.params.id;
  if (!queryDate) {
    return res
      .status(404)
      .json({ name: 'custom', message: 'date query missing' });
  }
  const isStatus = await Status.findOne(
    { user, date: queryDate },
    'mood symptoms -_id'
  );
  if (isStatus) {
    return res.json(isStatus);
  }
  return res.json({
    mood: '',
    symptoms: ''
  });
}

const resetMeals = () => ({
  breakfast: [],
  lunch: [],
  dinner: [],
  snack: []
});

async function isMealAded(req, res, next) {
  const id = req.params.id;
  const queryDate = req.query.queryDate;
  const mealId = req.query.mealId;
  const time = req.query.time;
  if (!queryDate || !time || !mealId) {
    return res.status(404).json({ name: 'custom', message: 'missing query' });
  }
  const user = await User.findById(id);

  if (user.meals && user.meals.date === queryDate) {
    const isMeal = user.meals[time].includes(mealId);
    if (isMeal) {
      return res.json({ message: 'added' });
    }
  }
  return res.json({ message: 'not' });
}

async function getMeals(req, res, next) {
  // if (!checkSubscription(req.user, 'meal'))
  //   return res.status(401).json({ message: 'not subscribed' });

  const id = req.params.id;
  const queryDate = req.query.date;
  if (!queryDate) {
    return res
      .status(404)
      .json({ name: 'custom', message: 'date query missing' });
  }

  const user = await User.findById(id, 'meals -_id').populate([
    'meals.breakfast',
    'meals.lunch',
    'meals.dinner',
    'meals.snack'
  ]);
  if (user.meals && user.meals.date === queryDate) {
    user.meals.date = undefined;

    // Object.keys(user.meals).map((time) => {
    //   time !== 'date' &&
    //     user.meals[time].map((energy, i) => {
    //       energy.toObject({ getters: false, virtuals: true });
    //       user.meals[time][i]['image'] = energy['image'];
    //     });
    // });
    return res.json(user.meals);
  }
  res.json(resetMeals());
}
async function addMeal(req, res, next) {
  // if (!checkSubscription(req.user, 'meal'))
  //   return res.status(401).json({ message: 'not subscribed' });

  const id = req.params.id;
  const { mealId, date, time } = req.body;
  if (!mealId || !date || !time) {
    return res.status(404).json({ name: 'custom', message: 'missing data' });
  }
  const user = await User.findById(id);
  const isMeal = await Meal.findById(mealId);
  if (!isMeal) {
    return res.status(404).json({ name: 'custom', message: 'meal not found' });
  }
  const sameTime = isMeal.time === time;
  const sameCategory = user.categories.includes(isMeal.category);
  if (!sameTime || !sameCategory) {
    return res.status(404).json({ name: 'custom', message: 'خطا' });
  }

  if (user.meals && user.meals.date === date) {
    user.meals.date = date;
    if (user.meals[time].includes(mealId)) {
      return res
        .status(404)
        .json({ name: 'custom', message: 'تم اضافته مسبقا ' });
    }
    user.meals[time].push(mealId);
    await user.save();

    return res.json(user.meals);
  }
  user.meals = resetMeals();
  user.meals.date = date;
  user.meals[time].push(mealId);
  await user.save();

  res.json(user.meals);
}

async function deleteMeal(req, res, next) {
  const id = req.params.id;
  const { mealId, date, time } = req.body;
  if (!mealId || !date || !time) {
    return res.status(404).json({ name: 'custom', message: 'missing data' });
  }
  const user = await User.findByIdAndUpdate(id, {
    $pull: { [`meals.${time}`]: mealId }
  });

  res.send('deleted');
}

async function updateMeats(req, res, next) {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      categories: req.body
    },
    {
      new: true
    }
  );
  res.json(user);
}
module.exports = {
  register,
  getUserById,
  login,
  logout,
  updateUserMeasurments,
  resetPasswordReq,
  resetPasswordRes,
  updateAccount,
  changeUserPassword,
  addWater,
  getWater,
  addStatus,
  getStatus,
  addMeal,
  deleteMeal,
  getMeals,
  isMealAded,
  updateMeats
};
