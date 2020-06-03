import { Request, Response } from 'express'

class UserController {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async index (req: Request, res: Response): Promise<Response> {
    return res.send(process.env.PORT + ' || ' + process.env.NAME)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    return res.send('Hello')
  }
}

export default new UserController()
