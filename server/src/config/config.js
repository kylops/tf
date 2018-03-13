module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'tf',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.DB_HOST || '127.0.0.1'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }

}
