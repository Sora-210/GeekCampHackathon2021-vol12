import { DB } from '../db'
import { MessageResponse } from '../interface/MessageResponse'
import { Router } from 'express'
import { FindOptions } from 'sequelize'

const LogsRouter:Router = Router()

//=====================================
/*
get /logs
post /logs
get /logs/:logId
delete /logs/:logId
*/
//=====================================

LogsRouter.get('/', async(req, res) => {
    const limit = (req.query.limit == null ? 20 : Number(req.query.limit))
    const pages = (req.query.pages == null ? 1 : Number(req.query.pages))
    const offset = limit * (pages - 1)
    let options:any = {
        limit: limit,
        offset: offset
    }
    if (req.query.userId) {
        options.where.userId = req.query.userId
    }
    if (req.query.targetId) {
        options.where.targetId = req.query.targetId
    }

    const Logs = await DB.Logs.findAll(options)
    res.status(200).json(Logs)
})
LogsRouter.get('/:logId', async(req, res) => {
    const options = {
        where: {
            id: req.params.logId
        }
    }
    const Log = await DB.Logs.findOne(options);

    if (Log) {
        res.status(200).json(Log)
    } else {
        const resMes: MessageResponse = {
            status: "Info",
            message: "Not Found"
        }
        res.status(404).json(resMes)
    }
})

LogsRouter.post('/', async(req, res) => {
    const date = new Date()
    if (req.body.title != null && req.body.targetId != null) {
        const Data = {
            targetId: req.body.targetId,
            title: req.body.title,
            detail: req.body.detail,
            date: date
        }

        const Log = await DB.Logs.create(Data)

        res.status(200).json(Log)
    } else {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Enogth Property"
        }
        res.status(403).json(resMes)
    }
})
LogsRouter.delete('/:logId', async(req, res) => {
    if (req.params.logId != null) {
        const options = {
            where: {
                id: req.params.logId
            }
        }
        const dbRes = await DB.Logs.destroy(options)

        if (dbRes) {
            const resMes: MessageResponse = {
                status: "success",
                message: "Deleted"
            }
            res.status(200).json(resMes)
        } else {
            const resMes: MessageResponse = {
                status: "Error",
                message: "Not Found"
            }
            res.status(404).json(resMes)
        }
    } else {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Enogth Property"
        }
        res.status(403).json(resMes)
    }
})
//=====================================
export {
    LogsRouter
}