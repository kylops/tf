console.log('Hello hi')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const {sequelize} = require('./models')

const config = require('./config/config')

const app = express()
app.use(morgan('comnined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes/routes')(app)

// app.post('/register', (req, res) => {
//     res.send({
//         message: `Hello ${req.body.email}!`
//     })
// })

sequelize.sync()
    .then(() => {
        app.listen(config.port || 8081)
        console.log(`server started on port ${config.port}`)
    })
