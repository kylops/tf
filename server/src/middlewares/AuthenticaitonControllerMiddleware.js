const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            // username: Joi.string().alphanum().min(3).max(30).required(),
            password: Joi.string().regex(
                new RegExp(/^[a-zA-Z0-9]{3,30}$/)
            ),
            // access_token: [Joi.string(), Joi.number()],
            // birthyear: Joi.number().integer().min(1900).max(2013),
            email: Joi.string().email()
        }
        const { error, value } = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
            case 'email':
                res.status(400).send({
                    error: 'you must provide a valid email address'
                })
                break
            case 'password':
                res.status(400).send({
                    error: 'you must provide a valid password'
                })
                break
            default:
                res.status(400).send({
                    error: 'Invalid information'
                })
            }
        } else {
            next()
        }
    }
}
