const {
  getFuels,
  saveFuel,
  updateFuel,
  deleteFuel,
} = require('../controllers/fuel.controller');
const router = require('express').Router();

router.get('/fuel/', getFuels);
router.post('/fuel/', saveFuel);
router.put('/fuel/', updateFuel);
router.delete('/fuel/', deleteFuel);
module.exports = router;
