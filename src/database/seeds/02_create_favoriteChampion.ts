import Knex from 'knex'

export async function seed (knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('favoriteChampion').del()
    .then(() => {
      return knex('favoriteChampion').insert([
        { user_id: 1, champion_id: 1 },
        { user_id: 1, champion_id: 140 },
        { user_id: 1, champion_id: 114 },
        { user_id: 1, champion_id: 144 },
        { user_id: 2, champion_id: 4 },
        { user_id: 2, champion_id: 15 },
        { user_id: 2, champion_id: 113 },
        { user_id: 3, champion_id: 56 },
        { user_id: 3, champion_id: 69 },
        { user_id: 4, champion_id: 81 },
        { user_id: 4, champion_id: 142 },
        { user_id: 5, champion_id: 23 },
        { user_id: 5, champion_id: 55 },
        { user_id: 5, champion_id: 94 }
      ])
    })
}
