const { isAuthorized } = require('../tokenFunction');

module.exports = {
    post: async (req, res) => {
    const auth = await isAuthorized(req)
    if(auth){
        res.status(205).json({
            data:{
                accessToken: null
            },
            message: "성공적으로 로그아웃 되었습니다."
        })
    } else {
        res.status(401).json({message:"이미 로그아웃 되었습니다."})
    }
  }};
  