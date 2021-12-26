import { Router } from 'express'

const UsersRouter:Router = Router()

//=====================================
/*
get /users
post /users
get /users/:userId
patch /users/:userId
delete /users/:userId
*/
//=====================================

UsersRouter.get('/', (req, res) => {
    res.status(200).json({"path":"[get]/users"})
})
UsersRouter.post('/', (req, res) => {
    res.status(200).json({"path":"[post]/users"})
})
UsersRouter.get('/:userId', (req, res) => {
    res.status(200).json({"path":"[get]/users/:userId"})
})
UsersRouter.patch('/:userId', (req, res) => {
    res.status(200).json({"path":"[patch]/users/:userId"})
})
UsersRouter.delete('/:userId', (req, res) => {
    res.status(200).json({"path":"[delete]/users/:userId"})
})

//=====================================
export {
    UsersRouter
}