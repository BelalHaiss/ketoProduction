const router = require('express').Router();
const {
  wrapAsync,
  isAuthenticated,
  isAdmin,
  isPermission,
  isAuthorized
} = require('../../utils/utils');
const {
  AddMeal,
  getMeals,
  updateMeal,
  deleteMeal,
  getCategories,
  seedCategory,
  destoryImage,
  getAllMeals,
  seedTimes,
  countMeals,
  getTimes
} = require('./meals.controller');

const { validateMeal } = require('../../utils/joi');

router.use(isAuthenticated);
router.get('/category', wrapAsync(getCategories));
router.post('/category/seed', wrapAsync(seedCategory));
router.get('/time', wrapAsync(getTimes));
router.post('/time/seed', wrapAsync(seedTimes));
//  meals routes
router.get('/query?', wrapAsync(getMeals));
router.get('/all?', isAdmin, wrapAsync(getAllMeals));
router.post(
  '/',
  isAuthorized,
  isAdmin,
  isPermission,
  wrapAsync(validateMeal),
  wrapAsync(AddMeal)
);

router.patch(
  '/update/:id',
  isAuthorized,
  isAdmin,
  isPermission,
  wrapAsync(validateMeal),
  wrapAsync(updateMeal)
);
router.delete(
  '/update/:id',
  isAuthorized,
  isAdmin,
  isPermission,
  wrapAsync(deleteMeal)
);
router.delete(
  '/image/destroy',
  isAuthorized,
  isAdmin,
  isPermission,
  wrapAsync(destoryImage)
);
router.get('/count?', isAdmin, wrapAsync(countMeals));

module.exports = router;
