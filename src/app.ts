import express from 'express'
import cors from 'cors'
import { createConnection } from 'typeorm'

import routes from './routes'

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.dev'
})

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private async database () {
    await createConnection()
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
