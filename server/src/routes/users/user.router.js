const router = require('express').Router();
const {
  wrapAsync,
  isAuthenticated,
  isAuthorizedUser
} = require('../../utils/utils');
const passport = require('passport');

const {
  register,
  getUserById,
  resetPasswordReq,
  logout,
  updateUserMeasurments,
  updateAccount,
  resetPasswordRes,
  changeUserPassword,
  addWater,
  addStatus,
  getStatus,
  getWater,
  isMealAded,
  deleteMeal,
  addCustomMeal,
  addMeal,
  getMeals,
  updateMeats
} = require('./user.controller');
const {
  validateRegister,
  resetPassword,
  changePassword,
  validateStatus,
  validateMeats,
  validateEditAccount,
  validateLogin,
  validateCustomMeal,
  validateUpdateMeasurements,
  validateWater,
  validateAddUserMeal
} = require('../../utils/joi');

router.get(
  '/user/:id',
  isAuthenticated,
  isAuthorizedUser,
  wrapAsync(getUserById)
);
router.post('/register', wrapAsync(validateRegister), wrapAsync(register));
router.post(
  '/login',
  wrapAsync(validateLogin),
  passport.authenticate('local', {
    failureRedirect: 'wrong',
    failureMessage: true
  }),
  function (req, res) {
    res.json(req.user);
  }
);

router.get('/wrong', function (req, res) {
  const message = 'تاكد من صحة البيانات المدخلة';
  res.status(401).json({ name: 'custom', message });
});

router.post('/logout', isAuthenticated, wrapAsync(logout));
router.get('/resetpassword/:email', wrapAsync(resetPasswordReq));
router.patch(
  '/updatepassword',
  wrapAsync(resetPassword),
  wrapAsync(resetPasswordRes)
);
router.patch(
  '/changepassword/:id',
  wrapAsync(changePassword),
  wrapAsync(changeUserPassword)
);
router.patch(
  '/measure/:id',
  isAuthorizedUser,
  wrapAsync(validateUpdateMeasurements),
  wrapAsync(updateUserMeasurments)
);
router.patch(
  '/account/:id',
  isAuthorizedUser,
  wrapAsync(validateEditAccount),
  wrapAsync(updateAccount)
);

router.get(
  '/water/:id',
  isAuthenticated,
  isAuthorizedUser,
  wrapAsync(getWater)
);

router.post(
  '/water/:id',
  isAuthenticated,
  isAuthorizedUser,
  wrapAsync(validateWater),
  wrapAsync(addWater)
);

router.get(
  '/status/:id',
  isAuthenticated,
  isAuthorizedUser,
  wrapAsync(getStatus)
);
router.post(
  '/status/:id',
  isAuthenticated,
  isAuthorizedUser,
  wrapAsync(validateStatus),
  wrapAsync(addStatus)
);
router.get(
  '/getmeal/:id',
  isAuthenticated,
  isAuthorizedUser,
  wrapAsync(getMeals)
);
router.post(
  '/addmeal/:id',
  isAuthenticated,
  isAuthorizedUser,
  wrapAsync(validateAddUserMeal),
  wrapAsync(addMeal)
);
router.post(
  '/addcustommeal/:id',
  isAuthenticated,
  isAuthorizedUser,
  wrapAsync(validateCustomMeal),
  wrapAsync(addCustomMeal)
);
router.get(
  '/ismealadded/:id',
  isAuthenticated,
  isAuthorizedUser,
  wrapAsync(isMealAded)
);
router.delete(
  '/deletemeal/:id',
  isAuthenticated,
  isAuthorizedUser,
  wrapAsync(deleteMeal)
);

router.post('/meats/:id', wrapAsync(validateMeats), wrapAsync(updateMeats));
module.exports = router;
