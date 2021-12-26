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
    res.status(200).json({"path":"[get]/version"})
})
SystemRouter.get('/health', (req, res) => {
    res.status(200).json({"path":"[get]/health"})
})

SystemRouter.post('/login', (req, res) => {
    res.status(200).json({"path":"[post]/login"})
})
SystemRouter.patch('/login', (req, res) => {
    res.status(200).json({"path":"[patch]/login"})
})
SystemRouter.delete('/logout', (req, res) => {
    res.status(200).json({"path":"[delete]/logout"})
})

//=====================================
export {
    SystemRouter
}