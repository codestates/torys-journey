const express = require("express")
const passport = require("passport")
const router = express.Router()
const { user } = require('../models')
const { generateAccessToken } = require('../controller/tokenFunction')

router.get('/kakao', passport.authenticate('kakao'));
router.get('/kakao/callback', (req,res) => {passport.authenticate('kakao', (passportError, user) =>{
    if( passportError || !user ) {
        return res.status(400).json({ message: "잘못된 요청입니다." })
    } else {
        req.login(user, {session:false}, async (err)=>{
            if( err ){
                return res.send(err)
            } else {
                const accessToken = await generateAccessToken({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    // auth: user.auth
                })
                return res.status(200).json({
                    data:{
                        userId: user.id,
                        accessToken: accessToken
                    },
                    message:'로그인에 성공하였습니다.'
                })
            }
        })
    }
})(req, res)
})
// router.get('/kakao/callback', passport.authenticate('kakao', {
//     failureRedirect: '/'
// }),
// (req, res) => {
//     res.redirect('/')
// })


router.get('/naver', passport.authenticate('naver'));
router.get('/naver/callback', (req,res) => {passport.authenticate('naver', (passportError, user) =>{
    if( passportError || !user ) {
        return res.status(400).json({ message: "잘못된 요청입니다." })
    } else {
        req.login(user, {session:false}, async (err)=>{
            if( err ){
                return res.send(err)
            } else {
                const accessToken = await generateAccessToken({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    // auth: user.auth
                })
                return res.status(200).json({
                    data:{
                        userId: user.id,
                        accessToken: accessToken
                    },
                    message:'로그인에 성공하였습니다.'
                })
            }
        })
    }
})(req, res)
})

router.get('/google', passport.authenticate(('google'), { scope: ['profile', 'email'] }));
router.get('/google/callback', (req,res) => {passport.authenticate('google', (passportError, user) =>{
    if( passportError || !user ) {
        return res.status(400).json({ message: "잘못된 요청입니다." })
    } else {
        req.login(user, {session:false}, async (err)=>{
            if( err ){
                return res.send(err)
            } else {
                const accessToken = await generateAccessToken({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    // auth: user.auth
                })
                return res.status(200).json({
                    data:{
                        userId: user.id,
                        accessToken: accessToken
                    },
                    message:'로그인에 성공하였습니다.'
                })
            }
        })
    }
})(req, res)
})

module.exports = router;
