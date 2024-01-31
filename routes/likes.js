const express = require('express');
const router = express.Router();
const {addLike, removeLike} = require('../controller/LikeController');

router.use(express.json());

router.post('/:id', addLike); // 좋아요 추가
router.delete('/:id', removeLike); // 좋아효 취소

module.exports = router;