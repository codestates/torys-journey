const passport = require('passport')
const { generateAccessToken } = require('../tokenFunction');
// const { user } = require('../../models');
// const bcrypt = require('bcrypt')

module.exports = {
    post : async (req, res) => {
            passport.authenticate('local', (passportError, user, info) =>{
                if( passportError || !user ) {
                    return res.status(404).json({ message: info.message })
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
            }) (req, res)
    }
//    post: async (req, res) => {
//     const userInfo = await user.findOne({
//     where: {email: req.body.email}
//     })
//     if(!userInfo){
//         res.status(404).json({message:'이메일을 잘못 입력하셨습니다.'})
//     } else {
//         const isValid = await bcrypt.compare(req.body.password, userInfo.dataValues.password)
//         if(!isValid){
//             res.status(401).json({message:'비밀번호를 잘못 입력하셨습니다.'})
//         } else {
//             delete userInfo.dataValues.password
//             // console.log(userInfo.dataValues)
//             const accessToken = await generateAccessToken(userInfo.dataValues)
//             res.status(200).json({
//                 data:{
//                     userId: userInfo.dataValues.id,
//                     accessToken: accessToken
//                 },
//                 message:'로그인에 성공하였습니다.'
//             })
//         }
//     }
// }
};