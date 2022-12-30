const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

const { main, about, register, login, processRegister, processLogin } = require('../controllers/mainController');

router.get('/', main);
router.get('/about', about);


router.get('/register', register);
router.post('/register', processRegister);

router.post('/login', login);
router.get('/login', processLogin);


module.exports = router;