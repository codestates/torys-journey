const { photo } = require('../../models');
const { isAuthorized } = require('../tokenFunction');

module.exports = {
    post: async (req, res) => {
        const auth = await isAuthorized(req)
        if(!auth) {
            res.status(401).json({ message: '사진을 등록할 수 있는 권한이 없습니다.' })
        } else {
            if( !req.body.uri ) {
                res.status(400).json({ message: 'uri를 입력해주세요.' })
            } else {
                try{
                    const { uri }  = req.body
                    for( const el of uri){
                        await photo.findOrCreate({
                            where: {
                                userId: auth.id,
                                restaurantId: req.params.id,
                                uri: el
                            }
                        })
                    }
                    // await uri.forEach(el=>{
                    //     photo.findOrCreate({
                    //         where: {
                    //             userId: auth.id,
                    //             restaurantId: req.params.id,
                    //             uri: el
                    //         }
                    //     })
                    // })
                    res.status(201).json({ message: '성공적으로 사진이 등록되었습니다.' })
                } catch {
                    res.status(500).send('Internel Server Error')
                }
            }
        }
    },
    delete: async (req, res) => {
        const auth = await isAuthorized(req)
        const delPhoto = await photo.findOne({
            where: {
                id: req.params.photoId
            }
        })
        if(auth.id!==delPhoto.userId) {
            res.status(401).json({ message: '삭제할 수 있는 권한이 없습니다.' })
        } else {
            try {
                await photo.destroy({
                    where: {
                        id: req.params.photoId
                    }
                })
                res.status(200).json({ message:'성공적으로 삭제 되었습니다.' })
            } catch {
                res.status(500).send('Internel Server Error')
            }
        }
    }
}