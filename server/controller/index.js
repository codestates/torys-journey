module.exports = {
    get: async (req, res) => {
        res.status(200).send('hello world')
    },
    userController: require("./user"),
    restController: require("./restaurant")
}