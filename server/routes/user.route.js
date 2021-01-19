const router = require('express').Router();
const {
  saveUser,
  getUsers,
  updateUser,
  deleteUser,
  dashboardSummary,
  getUser,
} = require('../controllers/user.controller');

router.post('/users/', saveUser);
router.get('/users/', getUsers);
router.get('/user/', getUser);
router.put('/users', updateUser);
router.delete('/users', deleteUser);
router.get('/users/dashboard', dashboardSummary);

module.exports = router;
