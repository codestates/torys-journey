const { restaurant } = require('../../models')

module.exports = {
    get: async (req, res) => {
        const restInfo =  await restaurant.findAll();
        if(!!restInfo){
            res.status(200).json({
                data: restInfo
            }) 
        } else {
            res.status(400).json({
                message: "식당을 찾을 수 없습니다."
            })
        }
    },
    post: (req, res) => {

    }
}