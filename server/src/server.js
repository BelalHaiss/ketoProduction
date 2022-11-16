// process.env.TZ = 'Africa/Accra';
const config = require('config');
const path = require('path');

const express = require('express');
const app = express();
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const mongoose = require('mongoose');
const dbUrl =
  process.env.NODE_ENV === 'production'
    ? `mongodb+srv://haiss:${config.get(
        'MONGO_PASSWORD'
      )}@keto-cluster.kth03b5.mongodb.net/keto?retryWrites=true&w=majority`
    : 'mongodb://localhost:27017/keto';
const cookieSession = require('cookie-session');
const passport = require('passport');
const { initializePassport } = require('./utils/passport');

app.use(
  mongoSanitize({
    allowDots: true
  })
);

// app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

if (process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: config.get('DEV_CLIENT_URL'),
      credentials: true
    })
  );
}

app.use(
  cookieSession({
    name: 'keto',
    keys: [config.get('COOKIE_KEY1')],

    // Cookie Options
    maxAge: 30 * 24 * 60 * 60 * 1000 // months
  })
);
app.use(passport.initialize());
app.use(passport.session());

initializePassport(passport);

const userRouter = require('./routes/users/user.router');
const adminRouter = require('./routes/admin/admin.router');
const mealRouter = require('./routes/meals/meals.router');
const workoutRouter = require('./routes/workout/workout.router');
const priciesRouter = require('./routes/price/price.router');
const paymentRouter = require('./routes/payment/payment.router');
const subscriptionsRouter = require('./routes/subscriptions/subscriptions.router');
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => console.log('error connecting to db', err));

app.use('/api/users', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/meals', mealRouter);
app.use('/api/workout', workoutRouter);
app.use('/api/prices', priciesRouter);
app.use('/api/payments', paymentRouter);
app.use('/api/subscriptions', subscriptionsRouter);

app.all('*', (req, res) => {
  // console.log(req.originalUrl, 'orignal url');

  res.status(404).json({ message: 'not found' });
});

app.use((err, req, res, next) => {
  console.log(err, 'error catched by express');
  const { status = 400, name } = err;
  if (name === 'custom') {
    return res.status(status).send({ name, message: err.message });
  }
  res.status(status).send({ name: 'error', message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server running on port' + port));
