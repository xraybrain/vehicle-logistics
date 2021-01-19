const {
  saveBreakdownHistory,
  getBreakdownHistories,
  updateBreakdownHistory,
  deleteBreakdownHistory,
} = require('../controllers/breakdown_history.controller');

const router = require('express').Router();

router.post('/breakdownhistory/', saveBreakdownHistory);
router.get('/breakdownhistory/', getBreakdownHistories);
router.put('/breakdownhistory/', updateBreakdownHistory);
router.delete('/breakdownhistory/', deleteBreakdownHistory);

module.exports = router;
