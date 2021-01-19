const router = require('express').Router();
const { login, getCurrentUser } = require('../controllers/auth.controller');

router.post('/auth/login/', login);
router.get('/auth/user/', getCurrentUser);

module.exports = router;
