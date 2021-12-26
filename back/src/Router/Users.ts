import { Router } from 'express'
import { MessageResponse } from '../interface/MessageResponse'
import { DB } from '../db'

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

UsersRouter.get('/', async (req, res) => {
    const limit = (req.query.limit == null ? 20 : Number(req.query.limit))
    const pages = (req.query.pages == null ? 1 : Number(req.query.pages))
    const offset = limit * (pages - 1) + 1
    const options = {
        limit: limit,
        offset: offset
    }

    const Users = await DB.Users.findAll(options);
    res.status(200).json(Users)
})
UsersRouter.post('/', async (req, res) => {
    let data = {
        name: "",
        email: "",
        password: ""
    }
    data.name = (req.body.name == null ? null : String(req.body.name))
    data.email = (req.body.email == null ? null : String(req.body.email))
    data.password = (req.body.password == null ? null : String(req.body.password))
    if (data.name && data.email && data.password) {
        const dbRes = await DB.Users.create(data)
        res.status(200).json(dbRes)
    } else {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Enogth Property"
        }
        res.status(403).json(resMes)
    }
})
UsersRouter.get('/:userId', async (req, res) => {
    const options = {
        where: {
            id: req.params.userId
        }
    }
    const User = await DB.Users.findOne(options);
    if (User) {
        res.status(200).json(User)
    } else {
        const resMes: MessageResponse = {
            status: "Info",
            message: "Not Found"
        }
        res.status(404).json(resMes)
    }
    
})
UsersRouter.patch('/:userId', async (req, res) => {
    let data = {
        name: "",
        email: "",
        password: ""
    }
    data.name = (req.body.name == null ? undefined : String(req.body.name))
    data.email = (req.body.email == null ? undefined : String(req.body.email))
    data.password = (req.body.password == null ? undefined : String(req.body.password))
    if ((data.name || data.email || data.password) && req.params.userId != null) {
        const options = {
            where: {
                id: req.params.userId
            }
        }
        const dbRes = await DB.Users.update(data, options)
        if (dbRes[0]) {
            const User = await DB.Users.findOne(options)
            res.status(200).json(User)
        }
    } else {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Enogth Property"
        }
        res.status(403).json(resMes)
    }
})
UsersRouter.delete('/:userId', async (req, res) => {
    const options = {
        where: {
            id: req.params.userId
        }
    }
    const dbRes = await DB.Users.destroy(options)
    res.status(200).json(dbRes)
})

//=====================================
export {
    UsersRouter
}