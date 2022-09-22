const User = require('../model/user.model');

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
}

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).json({ message: 'غير مسجل' });
}

async function isAdmin(req, res, next) {
  if (req.user.role) {
    return next();
  }

  res.status(401).json({ message: 'ليس لديك صلاحية' });
}
async function isAdminOnly(req, res, next) {
  if (req.user.role === 'admin') {
    return next();
  }
  res.status(401).json({ message: 'ليس لديك صلاحية' });
}
async function isAuthorizedUser(req, res, next) {
  if (req.params.id === req.user._id.toString()) {
    return next();
  }
  res.status(401).json({ message: 'ليس لديك صلاحية' });
}

async function isAuthorized(req, res, next) {
  try {
    if (req.body.addedBy === req.user._id.toString()) {
      return next();
    }
    res.status(401).json({ message: 'ليس لديك صلاحية' });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'ليس لديك صلاحية' });
  }
}

async function isPermission(req, res, next) {
  const path = req.query.path;
  if (!path) {
    return res.status(401).json({ message: 'ليس لديك صلاحية' });
  }
  if (path === '/' && req.user.role) {
    return next();
  }
  if (req.user.role === 'admin') {
    return next();
  } else if (req.user.role === path) {
    return next();
  }
  res.status(401).json({ message: 'ليس لديك صلاحية' });
}
class CustomError extends Error {
  constructor(name, message) {
    super();
    this.name = name;
    this.message = message;
  }
}

module.exports = {
  wrapAsync,
  isAuthenticated,
  isPermission,
  CustomError,
  isAdmin,
  isAuthorized,
  isAuthorizedUser,
  isAdminOnly
};
