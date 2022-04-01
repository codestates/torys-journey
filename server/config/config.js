require("dotenv").config()

module.exports = {
  development: {
    username: process.env.DATABASE_DEV_USERNAME,
    password: process.env.DATABASE_DEV_PASSWORD,
    database: process.env.DATABASE_DEV,
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.DATABASE_DEV_PASSWORD,
    database: process.env.DATABASE_DEV,
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: process.env.DATABASE_DEV_PASSWORD,
    database: process.env.DATABASE_DEV,
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
