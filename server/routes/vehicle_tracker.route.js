const {
  saveTracker,
  getTrackers,
  updateTracker,
  deleteTracker,
} = require('../controllers/vehicle_tracker.controller');

const router = require('express').Router();

router.post('/trackers/', saveTracker);
router.get('/trackers/', getTrackers);
router.put('/trackers/', updateTracker);
router.delete('/trackers/', deleteTracker);

module.exports = router;
