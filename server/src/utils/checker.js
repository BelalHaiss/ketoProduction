function checkSubscription(user, plan) {
  const thePlan = user.plans.find((plans) => plans.category === plan);
  if (!thePlan) {
    return false;
  }
  if (new Date(thePlan.end) > new Date()) {
    return true;
  } else return false;
}

module.exports = { checkSubscription };
