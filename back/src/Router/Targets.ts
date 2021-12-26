import { Router } from 'express'

const TargetsRouter:Router = Router()

//=====================================
/*
get /targets
post /targets
get /targets/:targetId
delete /targets/:targetId
*/
//=====================================

TargetsRouter.get('/', (req, res) => {
    res.status(200).json({"path":"[get]/targets","query":{"userId":req.query.userId}})
})
TargetsRouter.post('/', (req, res) => {
    res.status(200).json({"path":"[post]/targets"})
})
TargetsRouter.get('/:targetId', (req, res) => {
    res.status(200).json({"path":"[get]/targets/:targetId"})
})
TargetsRouter.delete('/:targetId', (req, res) => {
    res.status(200).json({"path":"[delete]/targets/:targetId"})
})
//=====================================
export {
    TargetsRouter
}