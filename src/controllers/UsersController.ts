import { Request, Response } from 'express'
import knex from '../database/connection'

class UsersController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await knex('loginUser').select('*')
    return res.json(users)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const user = await knex('loginUser').where('id', id).first()
    if (!user) {
      return res.send(400).json({ message: 'Not found' })
    }
    const champs = await knex('champion')
      .join('favoriteChampion', 'champion.id', '=', 'favoriteChampion.champion_id')
      .where('favoriteChampion.user_id', id)
      .orderBy('favoriteChampion.champion_id')

    return res.json({ user, champs })
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const { name, username, password } = req.body
    const user = await knex('loginUser').insert({
      name,
      username,
      password
    })
    return res.json(user)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { name, username, password } = req.body
    const user = await knex('loginUser').update({
      id,
      name,
      username,
      password
    })
    return res.json(user)
  }
}

export default UsersController
