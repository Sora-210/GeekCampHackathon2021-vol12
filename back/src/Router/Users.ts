import { Router } from 'express'
import { MessageResponse } from '../interface/MessageResponse'
import { DB } from '../db'
import { tokenAuth } from '../function/Auth'

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
        uid: "",
    }
    data.name = (req.body.name == null ? null : String(req.body.name))
    data.uid = (req.body.uid == null ? null : String(req.body.uid))
    if (data.name && data.uid) {
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

UsersRouter.use(tokenAuth)
UsersRouter.patch('/:userId', async (req, res) => {
    let data = {
        name: ""
    }
    data.name = (req.body.name == null ? undefined : String(req.body.name))
    if (!data.name && req.params.userId != null) {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Enogth Property"
        }
        res.status(402).json(resMes)
        return 0
    }
    if (req.uid !== req.params.userId) {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Enogth Authority"
        }
        res.status(403).json(resMes)
        return 0
    }
    const dbRes = await DB.Users.update(data, {
        where: {
            id: req.params.userId
        }
    })
    const User = await DB.Users.findOne({
        where: {
            id: req.params.userId
        }
    })
    res.status(200).json(User)
})
UsersRouter.delete('/:userId', async (req, res) => {
    if (!req.params.userId) {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Enogth Property"
        }
        res.status(402).json(resMes)
        return 0
    }
    if (req.uid !== req.params.userId) {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Enogth Authority"
        }
        res.status(403).json(resMes)
        return 0
    }
    const resDB = DB.Users.destroy({
        where: {
            id: req.uid,
        }
    })
    res.status(200).json(resDB)
})

//=====================================
export {
    UsersRouter
}