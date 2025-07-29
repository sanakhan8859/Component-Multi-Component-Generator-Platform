const router = require('express').Router();
const { verifyToken } = require('../utils/jwt');
const { generateComponent } = require('../controllers/ai.controller');

router.post('/generate', verifyToken, generateComponent);

module.exports = router;
