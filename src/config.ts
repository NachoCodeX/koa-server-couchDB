export const PORT: number = parseInt(process.env.PORT) || 7005,
    SECRET_TOKEN: string = "token",
    SALT_FACTOR: number = 10,
    COUCHDB_URI: string = process.env.COUCHDB_URI || 'http://admin:123456@localhost:5984' 