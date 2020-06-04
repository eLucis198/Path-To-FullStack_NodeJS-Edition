import Knex from 'knex'

export async function seed (knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('loginUser').del()
    .then(() => {
      return knex('loginUser').insert([
        { name: 'Guilherme', username: 'eLucis', password: 'senha1' },
        { name: 'Gabriel', username: 'llLennyll', password: 'senha2' },
        { name: 'Carlos', username: 'carloswalker', password: 'senha3' },
        { name: 'Taciany', username: 'sadredfox', password: 'senha4' },
        { name: 'Loize', username: 'louGabri', password: 'senha5' }
      ])
    })
}
