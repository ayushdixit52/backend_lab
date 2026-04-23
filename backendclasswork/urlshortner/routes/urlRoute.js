const express = require('express');
const router = express.Router();

const { generateUrl } = require('../controllers/urlController');

router.post('/shorten', generateUrl);

module.exports = router;