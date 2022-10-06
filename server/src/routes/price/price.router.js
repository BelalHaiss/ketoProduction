const router = require('express').Router();
const { wrapAsync, isAuthenticated, isAdmin } = require('../../utils/utils');
const Price = require('../../model/price.model');
const { validatePrice } = require('../../utils/joi');
const config = require('config');

async function getPrices(req, res) {
  const prices = await Price.find().select('-__v');
  res.json(prices);
}

async function updatePrices(req, res) {
  const allPrices = req.body.map((price) =>
    Price.findByIdAndUpdate(price._id, price)
  );

  await Promise.all(allPrices);
  res.send('updated');
}

async function seedPrices(req, res) {
  const prices = [
    {
      _id: 'mealOne',
      label: 'باقة الشهر الواحد',
      before: 30,
      price: 19,
      category: 'meal',
      plans: [
        {
          category: 'meal',
          duration: 30
        }
      ]
    },
    {
      _id: 'mealThree',
      label: 'باقة 3 شهور',
      before: 70,
      price: 49,
      category: 'meal',

      plans: [
        {
          category: 'meal',
          duration: 90
        },
        {
          category: 'workout',
          duration: 30
        }
      ]
    },
    {
      _id: 'mealSix',
      label: 'باقة 6 شهور',
      before: 100,
      price: 89,
      category: 'meal',
      plans: [
        {
          category: 'meal',
          duration: 180
        },
        {
          category: 'workout',
          duration: 30
        },
        {
          category: 'nutritionist',
          duration: 7
        }
      ]
    },
    {
      _id: 'nutritionist',
      label: 'باقة اخصائي التغذية',
      before: 80,
      price: 59,
      category: 'nutritionist',

      plans: [
        {
          category: 'nutritionist',
          duration: 30
        }
      ]
    },
    {
      _id: 'workout',
      label: 'باقة التمارين',
      before: 18,
      price: 9,
      category: 'workout',

      plans: [
        {
          category: 'workout',
          duration: 30
        }
      ]
    }
  ];
  await Price.deleteMany({});
  await Price.create(prices);
  res.json(prices);
}

router.get('/', wrapAsync(getPrices));
// router.post('/seed', isAuthenticated, isAdmin, wrapAsync(seedPrices));
router.post('/seed', wrapAsync(seedPrices));
router.post(
  '/update',
  isAuthenticated,
  isAdmin,
  wrapAsync(validatePrice),
  wrapAsync(updatePrices)
);
module.exports = router;
