const { review, restaurant } = require('../../models');
const { isAuthorized } = require('../tokenFunction');

module.exports = {
    get: async (req, res) => {
        const auth = await isAuthorized(req)
        if(!auth) {
            res.status(401).json({ message:'데이터에 접근할 권한이 없습니다.' })
        } else {
            const reviewData = await review.findAll({
                where: { userId: auth.id },
                include: [{
                    model: restaurant,
                    attributes: [ 'name' ]
                }],
                attributes: {
                    exclude: [ "createdAt", "updatedAt"]
                }
            })
            let refined = reviewData.map((el)=>{
                return{
                    reviewId: el.id,
                    restaurantId: el.restaurantId,
                    name: el.restaurant.name,
                    rating: el.rating,
                    comment: el.comment
                }
            })
            console.log(reviewData)
            if(reviewData.length===0){
                res.status(404).json({ message:'작성한 리뷰가 없습니다.' })
            } else {
                res.status(200).json({
                    data: refined
                })
            }
        }
    }
}