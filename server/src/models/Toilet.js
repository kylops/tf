module.exports = (sequelize, DataTypes) => {
    const Toilet = sequelize.define('Toilet', {
        // username: {
        //     type: DataTypes.STRING,
        //     unique: true
        // },
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        lat: DataTypes.FLOAT,
        lng: DataTypes.FLOAT
    })

    return Toilet
}
