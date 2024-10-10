const express = require('express');
const { getAllCharacters, addCharacter } = require('../controllers/characterController');
const router = express.Router();

router.route('/').get(getAllCharacters).post(addCharacter);

module.exports = router;
