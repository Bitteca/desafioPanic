import { Router } from 'express'

import UserController from './app/controllers/UserController'

const routes = new Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.delete('/users/:id', UserController.destroy)

export default routes
