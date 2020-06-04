import path from 'path'

module.exports = {

  development: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    },
    migrations: {
      direcroty: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
  }

}
