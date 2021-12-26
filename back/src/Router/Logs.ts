import { Router } from 'express'

const LogsRouter:Router = Router()

//=====================================
/*
get /logs
post /logs
get /logs/:logId
delete /logs/:logId
*/
//=====================================

LogsRouter.get('/', (req, res) => {
    res.status(200).json({"path":"[get]/logs","query":{"userId":req.query.userId,"targetId":req.query.targetId}})
})
LogsRouter.post('/', (req, res) => {
    res.status(200).json({"path":"[post]/logs"})
})
LogsRouter.get('/:logId', (req, res) => {
    res.status(200).json({"path":"[get]/logs/:logId"})
})
LogsRouter.delete('/:logId', (req, res) => {
    res.status(200).json({"path":"[delete]/logs/:logId"})
})
//=====================================
export {
    LogsRouter
}