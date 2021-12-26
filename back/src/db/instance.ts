import { Sequelize } from 'sequelize';
import { CreateAllTable } from './migrations/m_all'

const db = new Sequelize({
    "username": "root",
    "password": "pass",
    "database": "mylog",
    "host": "db",
    "dialect": "mysql",
    logging: false
})

CreateAllTable(db)

export {
    db
}