const {
  saveVehicle,
  getVehicles,
  updateVehicle,
  deleteVehicle,
} = require('../controllers/vehicle.controller');

const router = require('express').Router();

router.post('/vehicles/', saveVehicle);
router.get('/vehicles/', getVehicles);
router.put('/vehicles', updateVehicle);
router.delete('/vehicles/', deleteVehicle);

module.exports = router;
