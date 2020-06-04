import { Request, Response } from 'express'

class UsersController {
  public async index (req: Request, res: Response): Promise<Response> {
    return res.send('Hello World index')
  }

  public async show (req: Request, res: Response): Promise<Response> {
    return res.send('Hello World show')
  }

  public async create (req: Request, res: Response): Promise<Response> {
    return res.send('Hello World create')
  }

  public async update (req: Request, res: Response): Promise<Response> {
    return res.send('Hello World update')
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    return res.send('Hello World delete')
  }
}

export default UsersController
