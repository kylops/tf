const {Toilet} = require('../models')
// const config = require('../config/config')

module.exports = {
    async index (req, res) {
        try {
            const toilets = await Toilet.findAll({
                limit: 10
            })
            res.send(toilets)
        } catch (error) {
            console.log(error)
            res.status(400).send({
                error: 'error trying to fecth the toilets.'
            })
        }
    },
    async add (req, res) {
        try {
            const toilet = await Toilet.create(req.body)
            res.send(toilet)
        } catch (error) {
            console.log(error)
            res.status(400).send({
                error: 'error trying to create the toilets.'
            })
        }
    }
}
