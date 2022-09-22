const bcrypt = require('bcryptjs');
const User = require('../../model/user.model');

async function adminRegister(req, res, next) {
  const { email, password, pw, role, lastName, name } = req.body;
  if (pw !== '2320305') {
    return res.status(401).json({
      name: 'custom',
      message: 'كلمة المرور غير صحيحة'
    });
  }
  const isFound = await User.find({ 'profile.email': email });

  if (isFound.length > 0) {
    return res.status(400).json({
      name: 'custom',
      message: 'البريد الالكتروني  مستخدم'
    });
  }
  const user = await User.create({
    profile: {
      lastName,
      name,
      email,
      password: await bcrypt.hash(password, 9)
    },
    role
  });
  user.profile.password = undefined;
  return res.json(user);
}
async function changePermission(req, res, next) {
  const { userId, role } = req.body;

  await User.findByIdAndUpdate(userId, { role });
  res.json({ message: 'تم تغيير الصلاحية بنجاح' });
}

async function getAgents(req, res, next) {
  const agents = await User.find({ role: { $ne: null } }).select(
    '-profile.password'
  );
  res.json(agents.map((agent) => agent.toObject()));
}
async function searchUser(req, res, next) {
  const MailorPhone = req.params.MailorPhone;
  const searchReg = { $regex: MailorPhone, $options: 'i' };
  const isFound = await User.find({
    role: null,
    $or: [{ 'profile.email': searchReg }, { 'profile.phone': searchReg }]
  })
    .select('-profile.password')
    .sort({ updatedAt: -1 });
  if (!isFound.length) {
    return res.status(200).json({
      name: 'custom',
      message: 'لا يوجد بريد الكتروني بهذا الاسم'
    });
  }
  return res.status(200).json(isFound);
}

async function countUsers(req, res, next) {
  const counts = await User.countDocuments({
    role: null
  });
  res.json(counts);
}
async function getAllUsers(req, res) {
  const users = await User.find({ role: null });
  res.json(users);
}

async function changeUserPassword(req, res, next) {
  const id = req.params.id;
  const { password } = req.body;
  const re = /(?=^\S*$)(?=.{8,})/;
  if (!re.test(password)) {
    return res.status(400).json({
      name: 'custom',
      message: 'كلمة المرور يجب ان تكون من 8 حروف على الاقل '
    });
  }
  const user = await User.findByIdAndUpdate(id, {
    'profile.password': await bcrypt.hash(password, 9)
  });
  if (!user) {
    return res.status(400).json({
      name: 'custom',
      message: 'لا يوجد بريد الكتروني بهذا الاسم'
    });
  }
  res.json({ message: 'تم تغيير كلمة المرور بنجاح' });
}

async function deleteRoled(req, res) {
  await User.findByIdAndRemove(req.params.id);
  res.json({ msg: 'done' });
}

async function removeUser(req, res) {
  await User.findByIdAndRemove(req.params.id);
  res.json({ msg: 'done' });
}
module.exports = {
  deleteRoled,
  adminRegister,
  getAgents,
  changePermission,
  getAllUsers,
  searchUser,
  countUsers,
  removeUser,
  changeUserPassword
};
