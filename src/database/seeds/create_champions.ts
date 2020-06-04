import Knex, { QueryBuilder } from 'knex'
import fetch from 'node-fetch'

export async function seed (knex: Knex) {
  await knex('champion').del()
  await fetch('https://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion.json')
    .then(res => res.json())
    .then(async json => {
      const champs = []
      const jsonChamps = json.data
      const names = Object.keys(jsonChamps)
      for (let index = 0; index < names.length; index++) {
        champs.push({ name: names[index] })
      }
      await knex('champion').insert(champs)
    })
}

/* export async function seed (knex: Knex) {
  await knex('favoriteChampion').del()
    .then(async () => {
      await knex('champion').del()
        .then(async () => {
          await knex('champion').insert([
            { name: 'Tacinay' },
            { name: 'Guilherme' },
            { name: 'Livia' },
            { name: 'Marcos' },
            { name: 'Carlos' },
            { name: 'Gabriel' }
          ])
        })
    })
}
 */
