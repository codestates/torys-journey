const { review, restaurant, user } = require('../../models')
// const { user } = require('../../models')
const { isAuthorized } = require('../tokenFunction')


module.exports = {
    get: async (req, res) => {
        const auth = await isAuthorized(req)
        if(!auth) {
            res.status(401).json({ message:'리뷰를 조회할 권한이 없습니다.' })
        } else {
            try {
                const allReview = await review.findAll({
                    where: {
                        restaurantId: req.params.id
                    },
                    include: [{
                        model: user,
                        attributes: [ 'name' ]
                    }]
                })
                let sendReview = allReview.map((el)=>{
                    return {
                        reviewId: el.id,
                        userName: el.user.name,
                        rating: el.rating,
                        comment: el.comment
                    }
                })
                console.log(allReview)
                res.status(200).json({
                    data: sendReview
                })
            } catch {
                res.status(500).send('Internel Server Error')
            }
        }
    },
    post: async (req,res) => {
        const auth = await isAuthorized(req)
        if(!auth) {
            res.status(401).json({ message:'등록할 수 있는 권한이 없습니다.' })
        } else {
            if(!req.body.rating || !req.body.comment) {
                res.status(400).json({ message:'리뷰 내용이 없거나 평점을 입력하지 않았습니다.' })
            } else {
                try{
                const newReview = await review.create({
                    userId: auth.id,
                    restaurantId: req.params.id,
                    rating: req.body.rating,
                    comment: req.body.comment
                })
                const allReview = await review.findAll({
                    where: {
                        restaurantId: req.params.id
                    }
                })
                let sum = allReview.reduce((sum, el)=>{
                    return sum + el.rating
                },0)
                await restaurant.update({
                    rating: sum/allReview.length
                },{
                    where: {
                        id: req.params.id
                    }
                })
                res.status(201).json({
                    data: newReview,
                    message: '성공적으로 등록되었습니다.'
                })
                } catch {
                    res.status(500).send('Internel Server Error')
                }
            }
        }
    },
    patch: async (req,res) => {
        const auth = await isAuthorized(req)
        const oldReview = await review.findOne({
            where: {
                id: req.params.reviewId
            }
        })
        if(auth.id!==oldReview.userId) {
            res.status(401).json({ message: '리뷰를 수정할 수 있는 권한이 없습니다.'})
        } else {
            if(!req.body.comment) {
                res.status(400).json({ message: '내용을 작성해 주세요.'})
            } else {
                try {
                    const newReivew = await review.update({
                        comment: req.body.comment
                    },{
                        where: {
                            id: req.params.reviewId
                        }
                    })
                    const allReview = await review.findAll({
                        where: {
                            restaurantId: req.params.restaurantId
                        }
                    })
                    let sum = allReview.reduce((sum, el)=>{
                        return sum + el.rating
                    },0)
                    await restaurant.update({
                        rating: sum/allReview.length
                    },{
                        where: {
                            id: req.params.restaurantId
                        }
                    })
                    res.status(200).json({ message: '리뷰를 성공적으로 수정하였습니다.'})
                } catch {
                    res.status(500).send('Internel Server Error')
                }
            }
        }
    },
    delete: async (req,res) => {
        const auth = await isAuthorized(req)
        const delReview = await review.findOne({
            where: {
                id: req.params.reviewId
            }
        })
        if(auth.id!==delReview.userId) {
            res.status(401).json({ message:'삭제할 수 있는 권한이 없습니다.' })
        } else {
            try {
                await review.destroy({
                    where: {
                        id: req.params.reviewId
                    }
                })
                const allReview = await review.findAll({
                    where: {
                        restaurantId: req.params.restaurantId
                    }
                })
                let sum = allReview.reduce((sum, el)=>{
                    return sum + el.rating
                },0)
                await restaurant.update({
                    rating: sum/allReview.length
                },{
                    where: {
                        id: req.params.restaurantId
                    }
                })
                res.status(200).json({ message:'성공적으로 삭제 되었습니다.' })
            } catch {
                res.status(500).send('Internel Server Error')
            }
        }
    }
}