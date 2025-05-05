import { router } from 'express'
import homeController from '../controllers/home.Controller'
//import homeController from '../controllers/home.Controller.js'

const routerHome = new Router()

routerHome.get('/', homeController.index)

export default routerHome