const { user } = require("../../models")
const { isAuthorized } = require('../tokenFunction');

module.exports = {
    get: async (req,res) => {
        const auth = await isAuthorized(req)
        if(auth){
            res.status(200).json({data: auth})
        } else {
            res.status(401).json({message:"권한이 없습니다."})
        }
    },
    delete: async (req,res) => {
        const auth = await isAuthorized(req)
        if(auth){
            await user.destroy({
                where: {
                    id: auth.id
                }
            })
            res.status(200).json({message:"회원탈퇴가 성공적으로 완료 되었습니다."})
        } else {
            res.status(401).json({message:"잘못된 회원정보입니다."})
        }
    },
    patch: async (req,res) => {
        const auth = await isAuthorized(req)
        if(auth){
            if(!req.body.password){
                res.status(400).json({message:"회원 정보를 잘못 입력하셨습니다."})
            } else {
                await user.update({
                    password: req.body.password,
                },{
                    where: {
                        id: auth.id
                    }
                })
                res.status(200).json({message:"비밀번호가 성공적으로 변경 되었습니다."})
            }
        } else {
            res.status(401).json({message:"회원정보를 수정할 권한이 없습니다."})
        }
    }
}