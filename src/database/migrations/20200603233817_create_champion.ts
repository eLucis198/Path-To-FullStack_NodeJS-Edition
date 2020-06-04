import Knex from 'knex'

export async function up (knex: Knex): Promise<any> {
  return knex.schema.createTable('champion', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
  })
}

export async function down (knex: Knex): Promise<any> {
  return knex.schema.dropTable('champion')
}
