import knex from 'knex'
import { development, staging } from '../../knexfile'

const connection = knex(process.env.NODE_ENV === 'development' ? development : staging)

export default connection
