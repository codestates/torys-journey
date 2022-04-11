const { user } = require('../../models');
const bcrypt = require('bcrypt')
// const { generateAccessToken } = require('../tokenFunctions');

module.exports = {
    post: async (req, res) => {
  if(!req.body.email||!req.body.name||!req.body.password){
    res.status(400).send('모든 항목을 작성해주세요.')
  }
  else{
      const model = await user.findOne({
        where: {
          email: req.body.email
        }
      })
      if(!model){
          const hashed = await bcrypt.hash(req.body.password, 10)
          const userInfo = await user.create({
              email: req.body.email,
              name: req.body.name,
              password: hashed
          })
        // console.log(userInfo.dataValues)
        delete userInfo.dataValues.password
        // const accessToken = generateAccessToken(model[0].dataValues)
        res.status(201).json({
            data: userInfo,
            message:'회원가입에 성공하였습니다.'
        })
      } else {
        res.status(409).json({message:'중복된 이메일입니다.'})
      }
  }
}};