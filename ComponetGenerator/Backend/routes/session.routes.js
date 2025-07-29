const router = require('express').Router();
const { verifyToken } = require('../utils/jwt');
const { getSessions, getSessionById, saveSession } = require('../controllers/session.controller');

router.get('/', verifyToken, getSessions);
router.get('/:id', verifyToken, getSessionById);
router.post('/save', verifyToken, saveSession);

module.exports = router;
