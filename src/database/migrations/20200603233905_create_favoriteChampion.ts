import Knex from 'knex'

export async function up (knex: Knex): Promise<any> {
  return knex.schema.createTable('favoriteChampion', table => {
    table.increments('id').primary()
    table.integer('user_id').notNullable().references('id').inTable('appUser')
    table.integer('champion_id').notNullable().references('id').inTable('champion')
  })
}

export async function down (knex: Knex): Promise<any> {
  return knex.schema.dropTable('favoriteChampion')
}
