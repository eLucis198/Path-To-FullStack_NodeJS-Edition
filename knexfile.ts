import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: process.env.DB_URL,
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
  }
}
