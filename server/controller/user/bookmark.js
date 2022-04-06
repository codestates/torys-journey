const { bookmark, restaurant, photo } = require('../../models');
const { isAuthorized } = require('../tokenFunction');

module.exports = {
    get: async (req,res) => {
        const auth = await isAuthorized(req)
        if(!auth) {
            res.status(401).json({ message:'데이터에 접근할 권한이 없습니다.' })
        } else {
            const bookmarkData = await bookmark.findAll({
                where: { userId: auth.id },
                include: [{
                    model: restaurant,
                    attributes: [ 'name', 'id', 'rating', 'address', 'phoneNumber', 'detailInfo', 'officeHours']
                }],
                attributes: {
                    exclude: [ "createdAt", "updatedAt" ]
                }
            })
            // console.log(bookmarkData)
            if(bookmarkData.length===0){
                res.status(404).json({ message:'등록한 즐겨찾기가 없습니다.' })
            } else {
                const refinedArr = [];
                for ( const el of bookmarkData){
                    console.log(el.restaurant)
                    let photoArr = [];
                    let photoData = await photo.findAll({
                        where: {
                            restaurantId: el.restaurant.id
                        }
                    })
                    if(photoData.length!==0){
                        for( const el of photoData) {
                            photoArr.push(el.uri)
                        }
                    }
                    refinedArr.push({
                        id: el.restaurant.id,
                        name: el.restaurant.name,
                        photo: photoArr,
                        rating: el.restaurant.rating,
                        address: el.restaurant.address,
                        number: el.restaurant.phoneNumber,
                        detailInfo: el.restaurant.detailInfo,
                        officeHours: el.restaurant.officeHours
                    })
                }
                res.status(200).json({
                    data: refinedArr
                })
            }
        }
    }
}