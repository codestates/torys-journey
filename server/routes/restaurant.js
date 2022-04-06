const express = require("express")
const router = express.Router()

const { restController } = require("./../controller")
// query까지 구현해야함
router.get('/', restController.restaurant.get)

router.get('/:id', restController.restaurant.getId)

router.patch('/:id', restController.restaurant.patch)

router.post('/', restController.restaurant.post)

// router.post('/:id/hashtag', restController)

router.get('/:id/review', restController.review.get)

router.post('/:id/review', restController.review.post)

router.patch('/:restaurantId/review/:reviewId', restController.review.patch)

router.delete('/:restaurantId/review/:reviewId', restController.review.delete)

router.get('/:id/bookmark', restController.bookmark.get)

router.post('/:id/bookmark', restController.bookmark.post)

router.delete('/:id/bookmark', restController.bookmark.delete)

router.post('/:id/photo', restController.photo.post)

router.delete('/:restaurantId/photo/:photoId', restController.photo.delete)

module.exports = router;