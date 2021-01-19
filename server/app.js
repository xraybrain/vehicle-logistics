const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
require('dotenv').config();
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../public/dist', 'client')));

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  expressJWT({
    secret: process.env.JWT_SECRET,
    algorithms: ['sha1', 'RS256'],
    credentialsRequired: false,
  }).unless({
    path: ['/api/auth/login'],
  }),
  (err, req, res, next) => {
    console.log(err);
    next();
  }
);

// load and register routes
const userRoute = require('./routes/user.route');
app.use('/api/', userRoute);
const driverRoute = require('./routes/driver.route');
app.use('/api/', driverRoute);
const fuelRoute = require('./routes/fuel.route');
app.use('/api/', fuelRoute);
const routesRoute = require('./routes/routes.route');
app.use('/api/', routesRoute);
const breakdownHistoryRoute = require('./routes/breakdown_history.route');
app.use('/api/', breakdownHistoryRoute);
const vehicleRoute = require('./routes/vehicle.route');
app.use('/api/', vehicleRoute);
const trackerRoute = require('./routes/vehicle_tracker.route');
app.use('/api/', trackerRoute);
const authRoute = require('./routes/auth.routes');
app.use('/api/', authRoute);

app.all('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '../public/dist', 'client', 'index.html'));
});

const server = http.createServer(app);
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server is up on PORT::${PORT}`);
});

server.on('error', (err) => {
  switch (err.code) {
    case 'EADDRINUSE':
      console.log(`PORT::${PORT} is already in use try another port.`);
      break;
    default:
      console.log(`Failed to connect to this PORT::${PORT}`);
  }
});
