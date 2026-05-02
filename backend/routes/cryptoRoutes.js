const express = require('express');
const router = express.Router();
const {
    getAll,
    getGainers,
    getNew,
    createCrypto,
} = require('../controllers/cryptoController');

router.get('/', getAll);
router.get('/gainers', getGainers);
router.get('/new', getNew);
router.post('/', createCrypto);

module.exports = router;
