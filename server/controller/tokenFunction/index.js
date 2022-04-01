require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, {expiresIn:'12h'})
  },
  isAuthorized: async (req) => {
    if(!!req.headers.authorization){
      const accToken = req.headers.authorization.split(' ')[1]
      try {
        return await verify(accToken, process.env.ACCESS_SECRET)
      } catch(err) {
        return null;
      }
    } else {
      return null;
    }
  }
};