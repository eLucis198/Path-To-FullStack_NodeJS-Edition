import knex from 'knex'

const connection = knex({
  client: process.env.DB_CLIENT,
  connection: process.env.DB_URL
})

export default connection
