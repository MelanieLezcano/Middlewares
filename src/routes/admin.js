const express = require('express');
const router = express.Router();

const { create, edit, destroy,list } = require('../controllers/adminController');
const adminLogs = require('../middleware/adminLogs');

router.get('/',adminLogs,list);
router.get('/createProduct', create);
router.get('/editProduct', edit);
router.get('/destroyProduct', destroy);

module.exports = router;