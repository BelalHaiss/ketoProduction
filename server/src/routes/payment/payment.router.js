const router = require('express').Router();
const Test = require('../../model/test.model');
const {
  wrapAsync,
  isAuthenticated,
  isAdmin,
  isAuthorizedUser,
  isPermission,
  isAdminOnly
} = require('../../utils/utils');
const {
  getUserPayment,
  getAllPayments,
  getPaylinkToken,
  getPayLink,
  checkPayment,
  handleTapGateway
} = require('./payment.controller');

// router.post('/tap', wrapAsync(handleTapGateway));

router.get('/token', wrapAsync(getPaylinkToken));

router.post('/payLink', wrapAsync(getPayLink));

router.get('/check_payment', wrapAsync(checkPayment));

router.get(
  '/user/:id',
  isAuthenticated,
  isAuthorizedUser,
  wrapAsync(getUserPayment)
);

// admin routes

router.get(
  '/all?',
  isAuthenticated,
  isAdmin,
  isAdminOnly,
  wrapAsync(getAllPayments)
);

async function getTest(req, res) {
  const tests = await Test.find();
  res.json(tests);
}
// router.get('/test', wrapAsync(getTest));
module.exports = router;
