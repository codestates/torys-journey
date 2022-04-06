const { restaurant, photo } = require('../../models');
const { isAuthorized } = require('../tokenFunction');

module.exports = {
    get: async (req, res) => {
        const auth = await isAuthorized(req)
        if(!auth) {
            res.status(401).json({ message: '데이터에 접근할 권한이 없습니다.' })
        } else {
            try {
                const restInfo = await restaurant.findAll({
                    where: {
                        userId: auth.id
                    },
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "caution"]
                    }
                })
                if(restInfo.length===0){
                    res.status(404).json({ message: '등록한 식당이 없습니다.' })
                } else {
                    const refinedArr = [];
                    for ( const el of restInfo){
                        let photoArr = [];
                        let photoData = await photo.findAll({
                            where: {
                                restaurantId: el.id
                            }
                        })
                        if(photoData.length!==0){
                            for( const el of photoData) {
                                photoArr.push(el.uri)
                            }
                        }
                        refinedArr.push({
                            id: el.id,
                            name: el.name,
                            photo: photoArr,
                            rating: el.rating,
                            address: el.address,
                            number: el.phoneNumber,
                            detailInfo: el.detailInfo,
                            officeHours: el.officeHours
                        })
                    }
                    res.status(200).json({
                        data: refinedArr
                    })
                }
            } catch {
                res.status(500).send('Internel Server Error')
            }
        }
    }
}