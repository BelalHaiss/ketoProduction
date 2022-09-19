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
  getAllSubscriptions,
  testSubscriptions
} = require('./subscriptions.controller');
router.use(isAuthenticated);

router.get('/all?', isAdminOnly, wrapAsync(getAllSubscriptions));
// router.post('/test', wrapAsync(testSubscriptions));
module.exports = router;
