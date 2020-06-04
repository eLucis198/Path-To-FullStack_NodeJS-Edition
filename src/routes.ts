import { Router } from 'express'

import ChampionController from './controllers/ChampionsController'
import UsersController from './controllers/UsersController'

const routes = Router()
const championsController = new ChampionController()
const usersController = new UsersController()

routes.get('/champions', championsController.index)
routes.get('/champions/:id', championsController.show)

routes.get('/users', usersController.index)
routes.get('/users/:id', usersController.show)
routes.post('/users', usersController.create)
routes.put('/users/:id', usersController.update)
routes.delete('/users/:id', usersController.delete)

export default routes
