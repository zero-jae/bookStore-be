const express = require('express'); // express 모듈
const router = express.Router();
const {
    join, 
    login, 
    passwordResetRequest, 
    passwordReset
} = require('../controller/UserController');

router.use(express.json());

// 회원가입
router.post('/join', join);

// 로그인
router.post('/login', login);

// 비밀번호 초기화 요청
router.post('/reset', passwordResetRequest);

// 비밀번호 초기화
router.put('/reset', passwordReset);

module.exports = router;