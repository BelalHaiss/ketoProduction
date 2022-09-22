const router = require('express').Router();
const {
  wrapAsync,
  isAuthenticated,
  isAdmin,
  isPermission
} = require('../../utils/utils');
const { validateWorkout } = require('../../utils/joi');
const {
  getAll,
  getDayById,
  seedWorkout,
  updateDay
} = require('./workout.controller');
router.use(isAuthenticated);

router.get('/', isAdmin, wrapAsync(getAll));
router.post(
  '/seed',
  isAdmin,

  wrapAsync(seedWorkout)
);

router.get('/:id', wrapAsync(getDayById));
router.patch(
  '/:id',
  isAdmin,
  isPermission,
  wrapAsync(validateWorkout),
  wrapAsync(updateDay)
);

module.exports = router;
