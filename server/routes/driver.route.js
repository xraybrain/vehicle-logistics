const router = require('express').Router();
const {
  getDrivers,
  saveDriver,
  deleteDriver,
  updateDriver,
  getDriver,
} = require('../controllers/driver.controller');

router.get('/drivers/', getDrivers);
router.get('/driver/', getDriver);
router.post('/drivers/', saveDriver);
router.put('/drivers/', updateDriver);
router.delete('/drivers', deleteDriver);

module.exports = router;
