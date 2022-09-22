const router = require('express').Router();
const {
  wrapAsync,
  isAuthenticated,
  isAdmin,
  isPermission,
  isAdminOnly
} = require('../../utils/utils');
const {
  validateAdminRegister,
  validateUpdateMeasurements,
  validateEditAccount
} = require('../../utils/joi');
const {
  adminRegister,
  changePermission,
  searchUser,
  getAgents,
  countUsers,
  changeUserPassword,
  deleteRoled,
  removeUser,
  getAllUsers
} = require('./admin.controller');
const {
  updateUserMeasurments,
  updateAccount
} = require('../users/user.controller');
router.get(
  '/find/:MailorPhone',
  isAuthenticated,
  isAdmin,
  isPermission,
  wrapAsync(searchUser)
);

router.get(
  '/agents',
  isAuthenticated,
  isAdmin,
  isPermission,
  wrapAsync(getAgents)
);

router.post(
  '/register',
  isAuthenticated,
  isAdmin,
  isPermission,
  wrapAsync(validateAdminRegister),
  wrapAsync(adminRegister)
);

router.get('/validate', isAuthenticated, isAdmin, isPermission, (req, res) =>
  res.json({ auth: 'auth' })
);

router.patch(
  '/changePermission',
  isAuthenticated,
  isAdmin,
  isPermission,
  wrapAsync(changePermission)
);
router.delete('/role/:id', isAdmin, isPermission, wrapAsync(deleteRoled));

router.get(
  '/count/users',
  isAuthenticated,
  isAdmin,
  isPermission,
  wrapAsync(countUsers)
);
router.patch(
  '/measure/:id',
  isAuthenticated,
  isAdmin,
  isPermission,
  wrapAsync(validateUpdateMeasurements),
  wrapAsync(updateUserMeasurments)
);
router.patch(
  '/account/:id',
  isAuthenticated,
  isAdmin,
  isPermission,
  wrapAsync(validateEditAccount),
  wrapAsync(updateAccount)
);
router.patch(
  '/changepassword/:id',
  isAuthenticated,
  isAdmin,
  isPermission,
  wrapAsync(changeUserPassword)
);
router.delete('/user/:id', isAuthenticated, isAdminOnly, wrapAsync(removeUser));
router.get('/allusers/', isAuthenticated, isAdminOnly, wrapAsync(getAllUsers));

module.exports = router;
