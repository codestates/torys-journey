const express = require("express")
const router = express.Router()

const { userController } = require("../controller")

router.post('/signup', userController.signup.post)

router.post('/login', userController.login.post)

router.post('/logout', userController.logout.post)

router.delete('/', userController.user.delete)

router.patch('/', userController.user.patch)

router.get('/', userController.user.get)

router.get('/review', userController.review.get)

router.get('/restaurant', userController.restaurant.get)

router.get('/bookmark', userController.bookmark.get)

module.exports = router ;