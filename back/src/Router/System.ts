import { MessageResponse } from '../interface/MessageResponse'
import { VERSION, START_TIME } from '../app'
import { Router } from 'express'

const SystemRouter:Router = Router()

//=====================================
/*
get /version
get /health

post /login
patch /login
delete /logout
*/
//=====================================

SystemRouter.get('/version', (req, res) => {
    const resMes: MessageResponse = {
        status: "ok",
        message: VERSION
    }
    res.status(200).json(resMes)
})
SystemRouter.get('/health', (req, res) => {
    const resMes: MessageResponse = {
        status: "ok",
        message: {
            startTime: START_TIME
        }
    }
    res.status(200).json(resMes)
})
//=====================================
export {
    SystemRouter
}