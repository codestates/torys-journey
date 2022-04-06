const { restaurant, photo } = require('../../models');
const { isAuthorized } = require('../tokenFunction');


module.exports = {
    get: async (req, res) => {
        const restInfo =  await restaurant.findAll();
            if(restInfo.length!==0){
                let refinedArr = [];
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
                // })
                // console.log(restInfo)
            res.status(200).json({
                data: refinedArr
            }) 
        } else {
            res.status(400).json({
                message: "식당을 찾을 수 없습니다."
            })
        }
    },
    getId: async (req, res) => {
        const restInfo = await restaurant.findOne({
            where: {
                id: req.params.id
            }
        })
        if(!!restInfo){
            const photoData = await photo.findAll({
                where: {
                    restaurantId: restInfo.id
                }
            })
            let photoArr = [];
            if(!!photoData) {
                photoData.forEach( el => {
                    photoArr.push(el.uri)
                })
            }
            // console.log(photoArr)
            res.status(200).json({
                data: {
                    id: restInfo.dataValues.id,
                    name: restInfo.dataValues.name,
                    photo: photoArr,
                    rating: restInfo.dataValues.rating,
                    address: restInfo.dataValues.address,
                    number: restInfo.dataValues.phoneNumber,
                    detailInfo: restInfo.dataValues.detailInfo,
                    officeHours: restInfo.dataValues.officeHours
                }
            }) 
        } else {
            res.status(400).json({
                message: "식당을 찾을 수 없습니다."
            })
        }
    },
    post: async (req, res) => {
        const auth = await isAuthorized(req)
        if(!auth) {
            res.status(401).json({ message:'등록할 수 있는 권한이 없습니다.' })
        } else {
            if( !req.body.name || !req.body.address ) {
                res.status(400).json({ message:'필수 입력 칸을 모두 작성해주세요.' })
            } else {
                // findOrCreate로 다시 작성
                // 응답에 데이터도 넣어주는게 RESTfull 하지않을까?
                try{
                    const restInfo = await restaurant.create({
                    name : req.body.name,
                    userId : auth.id,
                    address: req.body.address,
                    phoneNumber: req.body.phoneNumber?req.body.phoneNumber:null,
                    detailInfo: req.body.detailInfo?req.body.detailInfo:null,
                    officeHours: req.body.officeHours?req.body.officeHours:null,
                    })
                    res.status(201).json({ 
                        data: restInfo,
                        message: '성공적으로 등록되었습니다.' 
                    })
                } catch {
                    res.status(500).send('Sorry, Internal Server Error.')
                }
            }
        }
    },
    patch: async (req, res) => {
        res.send('not implemented')
    }
}