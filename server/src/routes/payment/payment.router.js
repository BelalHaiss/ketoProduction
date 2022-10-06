const router = require('express').Router();

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

  handleTapGateway
} = require('./payment.controller');

router.post('/tap', wrapAsync(handleTapGateway));

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

module.exports = router;
