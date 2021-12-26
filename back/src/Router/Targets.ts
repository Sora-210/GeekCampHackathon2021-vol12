import { DB } from '../db/index'
import { MessageResponse } from '../interface/MessageResponse'
import { Router } from 'express'
import { tokenAuth } from '../function/Auth'

const TargetsRouter:Router = Router()

//=====================================
/*
get /targets
post /targets
get /targets/:targetId
delete /targets/:targetId
*/
//=====================================

TargetsRouter.get('/', async(req, res) => {
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
    if (req.query.userId != null) {
        options.where.userId = req.query.userId
    }

    const Targets = await DB.Targets.findAll(options)
    res.status(200).json(Targets)
})
TargetsRouter.get('/:targetId', async(req, res) => {
    const options = {
        where: {
            id: req.params.targetId
        }
    }
    const Target = await DB.Targets.findOne(options);

    if (Target) {
        res.status(200).json(Target)
    } else {
        const resMes: MessageResponse = {
            status: "Info",
            message: "Not Found"
        }
        res.status(404).json(resMes)
    }
})

TargetsRouter.use(tokenAuth)
TargetsRouter.post('/', async(req, res) => {
    if (!req.body.title) {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Enogth Property"
        }
        res.status(403).json(resMes)
        return 0
    }
    const Data = {
        userId: req.uid,
        title: req.body.title
    }
    const Target = await DB.Targets.create(Data)
    res.status(200).json(Target)
})
TargetsRouter.delete('/:targetId', async(req, res) => {
    if (req.params.targetId == null) {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Enogth Property"
        }
        res.status(403).json(resMes)
        return 0
    }
    const isTargets = await DB.Targets.findOne({
        where: {
            id: req.params.targetId
        }
    })
    if (!isTargets) {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Found"
        }
        res.status(404).json(resMes)
        return 0
    }
    if (isTargets.userId === req.uid) {
        const dbRes = await DB.Targets.destroy({
            where: {
                id: req.params.targetId
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
    } else {
        const resMes: MessageResponse = {
            status: "Error",
            message: "Not Enogth Authority"
        }
        res.status(403).json(resMes)
        return 0
    }
})
//=====================================
export {
    TargetsRouter
}