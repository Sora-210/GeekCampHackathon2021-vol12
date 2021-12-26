import express from 'express'
import { json as BodyParserJson } from 'body-parser'
import cors from 'cors'
import { auth } from './db/index'
//=====================================
//DataBaseSetting
auth()
//=====================================
//MagicNumberSetting
const PORT:Number = 9090;
const VERSION:String = "2.0.0"
import { DateTime } from './function/DateFormat'
const START_TIME:String = DateTime(new Date(Date.now() + (new Date().getTimezoneOffset() + (9 * 60) * 60000)))
export { VERSION, START_TIME }
//=====================================
//expressSetting
const app:express.Express = express()
app.use(BodyParserJson())
app.use(cors())
//=====================================
//Routing
import { UsersRouter } from './Router/Users'
app.use('/users', UsersRouter)

import { SUsersRouter } from './Router/SUsers'
app.use('/s/users', SUsersRouter)

import { TargetsRouter } from './Router/Targets'
app.use('/targets', TargetsRouter)

import { LogsRouter } from './Router/Logs'
app.use('/logs', LogsRouter)

import { SystemRouter } from './Router/System'
app.use('/', SystemRouter)

//=====================================
app.listen(PORT, () => {
    console.log("Mylog API Server Started")
    console.log("Listening Port: " + PORT)
})