import { DB } from '../db'
import { MessageResponse } from '../interface/MessageResponse'
import { Router } from 'express'
import { tokenAuth } from '../function/Auth'

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
        offset: offset,
        order: [
            ['createdAt','DESC']
        ]
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
LogsRouter.get('/:targetId/count', async(req, res) => {
    let options:any = {
        where: {
            targetId: req.params.targetId
        }
    }
    if (req.query.byDate) {
        options.gruop = ["date"]
    }
    const Logs_count = await DB.Logs.count(options)

    const resMsg = {
        count: Logs_count
    }
    res.status(200).json(resMsg)
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

LogsRouter.use(tokenAuth)
LogsRouter.post('/', async(req, res) => {
    const date = new Date()
    if (req.body.title == null || req.body.targetId == null) {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Enogth Property"
        }
        res.status(403).json(resMes)
        return 0
    }
    const isTargetId = await DB.Targets.findOne({
        where: {
            targetId: req.body.targetId
        }
    })
    if(!isTargetId) {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Found"
        }
        res.status(404).json(resMes)
        return 0
    }
    if(isTargetId.userId === req.uid) {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Enogth Authority"
        }
        res.status(403).json(resMes)
        return 0
    }
    const Data = {
        targetId: req.body.targetId,
        title: req.body.title,
        detail: req.body.detail,
        date: date
    }
    const Log = await DB.Logs.create(Data)
    res.status(200).json(Log)
})
LogsRouter.delete('/:logId', async(req, res) => {
    if (req.params.logId == null) {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Enogth Property"
        }
        res.status(402).json(resMes)
        return 0
    }
    const isLog = await DB.Logs.findOne({
        where: {
            id: req.params.logId
        }
    })
    if(!isLog) {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Found"
        }
        res.status(404).json(resMes)
        return 0
    }
    const isTarget = await DB.Targets.findOne({
        where: {
            id: isLog.targetId,
            userId: req.uid
        }
    })
    if(!isTarget) {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Enogth Authority"
        }
        res.status(403).json(resMes)
        return 0
    }
    const dbRes = await DB.Logs.destroy({
        where: {
            id: req.params.logId
        }
    })
    if (dbRes) {
        const resMes: MessageResponse = {
            status: "success",
            message: "Deleted"
        }
        res.status(200).json(resMes)
    } else {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Unknown Error"
        }
        res.status(500).json(resMes)
    }
})
//=====================================
export {
    LogsRouter
}