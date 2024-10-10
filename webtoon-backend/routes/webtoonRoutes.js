const express = require('express');
const { getAllWebtoons, getWebtoonById, addWebtoon, deleteWebtoon } = require('../controllers/webtoonController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').get(getAllWebtoons).post(protect, addWebtoon);
router.route('/:id').get(getWebtoonById).delete(protect, deleteWebtoon);

module.exports = router;
