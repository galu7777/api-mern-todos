const express = require('express');
const router = express.Router();
const { singin, singup } = require('../controllers/auth.controller');

router.post('/singin', singin);
router.post('/singup', singup);

module.exports = router;