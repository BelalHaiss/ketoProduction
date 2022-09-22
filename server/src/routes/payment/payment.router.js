const router = require('express').Router();

const {
  wrapAsync,
  isAuthenticated,
  isAdmin,
  isAuthorizedUser,
  isPermission,
  isAdminOnly
} = require('../../utils/utils');
const { validateNewPayment } = require('../../utils/joi');
const {
  addPayment,
  getUserPayment,
  getAllPayments,
  testAddPayment
} = require('./payment.controller');
router.use(isAuthenticated);

router.post(
  '/:id',
  isAuthorizedUser,
  wrapAsync(validateNewPayment),
  wrapAsync(addPayment)
);
// router.post(
//   '/test/:id',
//   isAuthorizedUser,
//   // wrapAsync(validateNewPayment),
//   wrapAsync(testAddPayment)
// );
router.get('/user/:id', isAuthorizedUser, wrapAsync(getUserPayment));

// admin routes

router.get('/all?', isAdmin, isAdminOnly, wrapAsync(getAllPayments));
module.exports = router;
