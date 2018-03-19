const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
    // const SALT_FACTOR = 8
    if (!user.changed('password')) {
        return
    }
    return bcrypt.hash(user.password, null, null, function (err, hash) {
        if (!err) {
            user.setDataValue('password', user.password)
        }
    })
    // return bcrypt
    //     .genSaltSync(SALT_FACTOR)
    //     .then(salt => bcrypt.hashAsync(user.password, salt, null))
    //     .then(hash => {
    //         user.setDataValue('password', hash)
    //     })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        // username: {
        //     type: DataTypes.STRING,
        //     unique: true
        // },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })

    User.prototype.comparePasword = function (password) {
        // compare(password, hash, function(err, res) {
        //     // res == true
        // })
        return bcrypt.compareSync(this.password, password)
    }

    return User
}

// module.exports = (sequelize, DataTypes) => { } defines an object without a return
