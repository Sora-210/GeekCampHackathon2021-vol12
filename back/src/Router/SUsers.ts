import { Router } from 'express'

const SUsersRouter:Router = Router()

//=====================================
/*
get /s/users
patch /s/users/email
patch /s/users/password
*/
//=====================================

SUsersRouter.get('/', (req, res) => {
    res.status(200).json({"path":"[get]/s/users"})
})
SUsersRouter.patch('/email', (req, res) => {
    res.status(200).json({"path":"[patch]/s/users/email"})
})
SUsersRouter.patch('/password', (req, res) => {
    res.status(200).json({"path":"[patch]/s/users/password"})
})

//=====================================
export {
    SUsersRouter
}