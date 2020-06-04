import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

const config = {
  development: {
    client: process.env.DB_CLIENT_DEVELOPMENT,
    connection: process.env.DB_URL_DEVELOPMENT,
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
  },
  staging: {
    client: process.env.DB_CLIENT_STAGING,
    connection: process.env.DB_URL_STAGING,
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
  }
}

export const { development, staging } = config
