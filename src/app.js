import express from 'express'
import dotenv from 'dotenv'
import homeRoutes from './routers/home.Routes.js'

dotenv.config()

class app {
    constructor() {
        this.app = express()
        this.midddlewares()
        this.routes()
    }

    midddlewares() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    routes() {
        this.app.use('/', homeRoutes)
    }
}

export default new app().app