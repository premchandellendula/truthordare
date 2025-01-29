const express = require('express');
const router = express.Router();

const todRouter = require('./tod.js');

router.use('/question', todRouter);

module.exports = router;