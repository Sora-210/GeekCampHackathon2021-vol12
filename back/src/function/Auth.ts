import { Router } from 'express'
import { getAuth, Auth } from 'firebase-admin/auth'
import { MessageResponse } from '../interface/MessageResponse'

const tokenAuth = Router()

tokenAuth.all('*', (req, res, next) => {
    const auth:Auth = getAuth()
    const token:string = req.header('Authorization')!
    auth.verifyIdToken(token)
        .then((result) => {
            req.uid = result.uid
            next()
        })
        .catch((e) => {
            const resMeg: MessageResponse = {
                status: "Error",
                message: "Not Enogth Authority"
            }
            res.status(403).json(resMeg)
        })
})

export {
    tokenAuth
}