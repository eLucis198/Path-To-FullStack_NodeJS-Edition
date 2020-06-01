import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import routes from './routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    dotenv.config()
    this.middlewares()
    this.routes()
  }

  // private connections () {

  // }

  private middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes () {
    this.express.use(routes)
  }
}

export default new App().express
