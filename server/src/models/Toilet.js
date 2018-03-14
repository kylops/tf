module.exports = (sequelize, DataTypes) => sequelize.define('Toilet', {
    // username: {
    //     type: DataTypes.STRING,
    //     unique: true
    // },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    address: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT
})
