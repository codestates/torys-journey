const { response } = require('express')
const { bookmark } = require('../../models')
const { isAuthorized } = require('../tokenFunction')

module.exports= {
    post: async (req, res) => {
        // 북마크 이미 등록되어있으면 409 응답
        const auth = await isAuthorized(req)
        if(!auth) {
            res.status(401).json({ message:'즐겨찾기를 등록할 권한이 없습니다.' })
        } else {
            try{
                const bookmarkInfo = await bookmark.findOrCreate({
                    where: {
                        userId: auth.id,
                        restaurantId: req.params.id
                    }
                })
                if(bookmarkInfo[1]){
                    res.status(201).json({ message: '즐겨찾기를 성공적으로 등록하였습니다.'})
                } else {
                    res.status(409).json({ message: '이미 즐겨찾기에 등록되어 있습니다.'})
                }
            } catch {
                res.status(500).send('Sorry, Internal Server Error.')
            }
        }
    },
    delete: async (req, res) => {
        const auth = await isAuthorized(req)
        if(!auth) {
            res.status(401).json({ message:'삭제할 수 있는 권한이 없습니다.' })
        } else {
            try {
                const bookmarkInfo = await bookmark.destroy({
                    where: {
                        userId: auth.id,
                        restaurantId: req.params.id
                    }
                })
                res.status(200).json({ message: '성공적으로 삭제 되었습니다.'})
            } catch {
                res.status(500).send('Sorry, Internal Server Error.')
            }
        }
    },
    get: async (req, res) => {
        const auth = await isAuthorized(req)
        if(!auth) {
            res.status(401).json({ message:'조회할 수 있는 권한이 없습니다.' })
        } else {
            try {
                const bookmarkData = await bookmark.findOne({
                    where: {
                        userId: auth.id,
                        restaurantId: req.params.id
                    }
                })
                if(bookmarkData){
                    res.status(200).json({ message: '북마크가 등록되어있습니다.'})
                } else {
                    res.status(400).json({ message: '북마크가 등록 되어있지 않습니다.'})
                }
            } catch {
                res.status(500).send('Sorry, Internal Server Error.')
            }
        }
    }
}