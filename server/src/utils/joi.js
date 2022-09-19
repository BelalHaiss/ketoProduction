const Joi = require('joi');

function validateCategory() {
  return Joi.string().valid(
    'chicken',
    'cow',
    'sheep',
    'camel',
    'caridea',
    'fish',
    'other'
  );
}
function validatePlansCategory() {
  return Joi.string().valid('meal', 'nutritionist', 'workout');
}

const measurementsValidation = Joi.object({
  height: Joi.number().min(120).max(220).required(),
  weight: Joi.number().min(40).max(150).required(),
  desiredWeight: Joi.number().min(40).max(150).required(),
  sex: Joi.string().valid('male', 'female').required(),
  age: Joi.number().min(18).max(90).required(),
  weightUpdateDate: Joi.date()
})
  .length(6)
  .required();
const physicalActivityValidation = Joi.string().valid(
  'sedentary',
  'light',
  'moderate',
  'active'
);

const willingValidation = Joi.string().valid('min', 'max');
async function resetPassword(req, res, next) {
  const schema = Joi.object({
    token: Joi.string(),
    userId: Joi.string(),
    password: Joi.string()
      .pattern(/(?=^\S*$)(?=.{8,})/)
      .required()
  })
    .min(3)
    .max(3)
    .required();
  await schema.validateAsync(req.body);

  next();
}
async function changePassword(req, res, next) {
  const schema = Joi.object({
    password: Joi.string()
      .pattern(/(?=^\S*$)(?=.{8,})/)
      .required(),
    newPassword: Joi.string()
      .pattern(/(?=^\S*$)(?=.{8,})/)
      .required()
  })
    .length(2)
    .required();
  await schema.validateAsync(req.body);

  next();
}
async function validateRegister(req, res, next) {
  const { measurements, physicalActivity, willing } = req.body;
  const { desiredWeight, weight } = measurements;
  if (desiredWeight > weight) {
    next(new Error('الوزن المطلوب لا يمكن ان يكون اقل من الوزن الحالي'));
  }
  const schema = Joi.object({
    profile: Joi.object({
      name: Joi.string()
        .pattern(/(?=^.{2,18}$)/)
        .required(),
      lastName: Joi.string()
        .pattern(/(?=^.{2,18}$)/)
        .required(),
      email: Joi.string()
        .pattern(
          // new RegExp('^([a-zA-Z0-9_-?.?]+)@([a-zA-Z]){3,}.([a-zA-Z]){2,5}$')
          /^([a-zA-Z0-9_\-?\.?]+)@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/
        )
        .required(),
      phone: Joi.string().required(),
      password: Joi.string()
        // .pattern(/(?=^S*$)(?=.{8,})/)
        .pattern(/(?=^\S*$)(?=.{8,})/)
        .required(),
      country: Joi.string().required()
    })
      .min(6)
      .max(6)
      .required(),

    measurements: measurementsValidation,
    physicalActivity: physicalActivityValidation,
    willing: willingValidation,

    categories: Joi.array().items(validateCategory()).required()
  }).length(5);
  await schema.validateAsync(req.body);

  next();
}

async function validateAdminRegister(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
      .pattern(
        // new RegExp('^([a-zA-Z0-9_-?.?]+)@([a-zA-Z]){3,}.([a-zA-Z]){2,5}$')
        /^([a-zA-Z0-9_\-?\.?]+)@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/
      )
      .required(),
    lastName: Joi.string().required(),
    password: Joi.string()
      // .pattern(/(?=^S*$)(?=.{8,})/)
      .pattern(/(?=^\S*$)(?=.{8,})/)
      .required(),
    pw: Joi.string().required(),
    role: Joi.string()
      .valid('admin', 'meals', 'subscriptions', 'workouts')
      .required()
  })
    .length(6)
    .required();
  await schema.validateAsync(req.body);
  next();
}

async function validateUpdateMeasurements(req, res, next) {
  const { measurements, physicalActivity } = req.body;
  const { desiredWeight, weight } = measurements;
  if (desiredWeight > weight) {
    next(new Error('الوزن المطلوب لا يمكن ان يكون اقل من الوزن الحالي'));
  }
  const schema = Joi.object({
    measurements: measurementsValidation,
    physicalActivity: physicalActivityValidation,
    willing: willingValidation
  })
    .length(3)
    .required();
  await schema.validateAsync(req.body);

  next();
}
async function validateLogin(req, res, next) {
  const schema = Joi.object({
    emailOrNumber: Joi.string().required(),
    password: Joi.string()
      .pattern(/(?=^\S*$)(?=.{8,})/)
      .required()
  })
    .min(2)
    .max(2);
  await schema.validateAsync(req.body);

  next();
}
async function validateEditAccount(req, res, next) {
  const path = req.query.path;
  const schema = Joi.object({
    name: Joi.string()
      .pattern(/(?=^.{2,18}$)/)
      .required(),
    lastName: Joi.string()
      .pattern(/(?=^.{2,18}$)/)
      .required(),
    email: Joi.string()
      .pattern(
        // new RegExp('^([a-zA-Z0-9_-?.?]+)@([a-zA-Z]){3,}.([a-zA-Z]){2,5}$')
        /^([a-zA-Z0-9_\-?\.?]+)@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/
      )
      .required(),
    phone: !req.user.role || path ? Joi.string().required() : Joi.string(),
    country: !req.user.role || path ? Joi.string().required() : Joi.string()
  })
    .min(3)
    .max(5)
    .required();

  await schema.validateAsync(req.body);

  next();
}
async function validateMeal(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    category: validateCategory().required(),
    time: Joi.string()
      .valid('dinner', 'snack', 'lunch', 'breakfast')
      .required(),
    duration: Joi.number().required(),
    calories: Joi.number().min(10).max(2000).required(),
    proteins: Joi.number().min(1).max(150).required(),
    carbs: Joi.number().min(1).max(150).required(),
    fats: Joi.number().min(1).max(150).required(),
    image: Joi.string().required(),
    steps: Joi.string().required(),
    components: Joi.array().items(Joi.string()).min(3).required(),
    addedBy: Joi.string().length(24).required()
  })
    .length(12)
    .required();
  await schema.validateAsync(req.body);

  next();
}

async function validateWorkout(req, res, next) {
  const schema = Joi.object({
    _id: Joi.number().integer().less(32).min(1).required(),
    day: Joi.ref('_id'),
    label: Joi.string().required(),
    videos: Joi.array()
      .items(
        Joi.object({
          duration: Joi.number().integer().less(60).min(1).required(),
          url: Joi.string().uri().required()
        })
          .length(2)
          .required()
      )
      .length(3)
      .required()
  })
    .length(4)
    .required();

  await schema.validateAsync(req.body);

  next();
}

async function validatePrice(req, res, next) {
  const schema = Joi.array()
    .items(
      Joi.object({
        label: Joi.string().required(),
        category: Joi.string().valid('meal', 'nutritionist', 'workout'),
        price: Joi.number().required(),
        plans: Joi.array(),
        usd: Joi.number().required(),
        _id: Joi.string().required()
      })
        .length(6)
        .required()
    )
    .length(5)
    .required();
  await schema.validateAsync(req.body);
  next();
}

async function validateWater(req, res, next) {
  const schema = Joi.object({
    date: Joi.date().required(),
    cups: Joi.number().min(1).max(14).required()
  })
    .length(2)
    .required();
  await schema.validateAsync(req.body);
  next();
}

async function validateStatus(req, res, next) {
  const schema = Joi.object({
    date: Joi.date().required(),
    symptoms: Joi.string().valid(
      'headache',
      'bloating',
      'stomach',
      'thirsty',
      'disgust',
      'smell',
      'constipation',
      ''
    ),
    mood: Joi.string().valid(
      'sleepy',
      'moody',
      'happy',
      'tired',
      'ignore',
      'clear',
      'active',
      ''
    ),
    user: Joi.string().length(24).required()
  })

    .length(4)
    .required();
  await schema.validateAsync(req.body);
  next();
}
async function validateAddUserMeal(req, res, next) {
  const schema = Joi.object({
    date: Joi.date().required(),
    time: Joi.string().valid('dinner', 'snack', 'lunch', 'breakfast'),
    mealId: Joi.string().length(24).required()
  })
    .length(3)
    .required();
  await schema.validateAsync(req.body);
  next();
}
async function validateNewPayment(req, res, next) {
  const schema = Joi.object({
    priceId: Joi.string().required(),
    category: validatePlansCategory().required(),
    userId: Joi.string().length(24).required(),
    paid: Joi.number().required(),
    paypal: Joi.object(),
    isFailed: Joi.boolean()
  })
    .length(6)
    .required();
  await schema.validateAsync(req.body);
  next();
}
async function validateMeats(req, res, next) {
  const schema = Joi.array().items(validateCategory()).required();

  await schema.validateAsync(req.body);
  next();
}
module.exports = {
  validateRegister,
  validateUpdateMeasurements,
  validateLogin,
  resetPassword,
  validateMeal,
  validateWorkout,
  validateStatus,
  validateAdminRegister,
  validatePrice,
  validateEditAccount,
  changePassword,
  validateWater,
  validateNewPayment,
  validateMeats,
  validateAddUserMeal
};
