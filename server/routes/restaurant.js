const express = require("express")
const router = express.Router()

const { restController } = require("./../controller")
// query까지 구현해야함
router.get('/', restController.restaurant.get)

// router.post('/', restController.restaurant.post)

// router.post('/:id/hashtag', restController)

// router.post('/:id/review', restController)

module.exports = router;