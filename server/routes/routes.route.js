const {
  getRoutes,
  saveRoute,
  updateRoute,
  deleteRoute,
} = require('../controllers/route.controller');

const router = require('express').Router();

router.get('/routes/', getRoutes);
router.post('/routes/', saveRoute);
router.put('/routes/', updateRoute);
router.delete('/routes/', deleteRoute);
module.exports = router;
