import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { User } from '../entity/User'

class UserController {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async index (req: Request, res: Response): Promise<Response> {
    const userRepository = getRepository(User)
    try {
      const users = await userRepository.find()
      return res.json(users)
    } catch (error) {
      return res.send(400)
    }
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const { name, username, password } = req.body
    const user = new User(name, username, password)
    const userRepository = getRepository(User)
    await userRepository.save(user)

    return res.json(user)
  }
}

export default new UserController()
