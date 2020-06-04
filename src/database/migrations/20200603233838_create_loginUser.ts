import Knex from 'knex'

export async function up (knex: Knex): Promise<any> {
  return knex.schema.createTable('loginUser', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('username').notNullable()
    table.string('password').notNullable()
  })
}

export async function down (knex: Knex): Promise<any> {
  return knex.schema.dropTable('loginUser')
}
