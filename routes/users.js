const express = require('express')
const validator = require('validator')
const User = require('../models/user')
const router = express.Router()
const uploadImage = require('../middlewares/uploadImage')
const { isAuth, generateSendJWT } = require('../service/auth')
const { uploadAvatar } = require('../controller/upload.controller')

const {
    signUp,
    signIn,
    updatePassword,
    getUserProfile,
    getUserProfileById,
    updateProfile,
    follow,
    unFollow,
} = require('../controller/user.controller')

// 註冊會員
router.post('/sign_up', express.json(), signUp)

// 會員登入
router.post('/sign_in', express.json(), signIn)

// 更新密碼
router.post('/update_password', isAuth, express.json(), updatePassword)

// 取得個人資料
router.get('/profile', isAuth, getUserProfile)

// 取得其他用戶資料
router.get('/profile/:id', isAuth, getUserProfileById)

// 更新個人資料
router.patch('/profile', isAuth, express.json(), updateProfile)

// 上傳用戶大頭貼
router.post('/profile/avatar', isAuth, uploadImage, uploadAvatar)

// 追蹤用戶
router.post('/:id/follow', isAuth, follow)

// 取消追蹤用戶
router.delete('/:id/un_follow', isAuth, unFollow)

module.exports = router
