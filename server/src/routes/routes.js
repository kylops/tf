const AuthenticationController = require('../controllers/AuthenticationController')
const AuthenticationControllerMiddleware = require('../middlewares/AuthenticaitonControllerMiddleware')

const ToiletsController = require('../controllers/ToiletsController')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerMiddleware.register,
        AuthenticationController.register
    )
    app.post('/login', AuthenticationController.login)

    app.post('/addtoilet', ToiletsController.add)
    app.get('/toilets', ToiletsController.index)
    app.get('/toilets/:toiletId', ToiletsController.show)
}
