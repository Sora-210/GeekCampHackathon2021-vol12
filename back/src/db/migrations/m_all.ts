import { UsersTableQuery } from'./m_Users'
import { TargetsTableQuery } from './m_Targets'
import { LogsTableQuery } from './m_Logs'
import { Sequelize } from 'sequelize/dist'

function CreateAllTable(instance: Sequelize) {
    UsersTableQuery.up(instance.getQueryInterface())
    TargetsTableQuery.up(instance.getQueryInterface())
    LogsTableQuery.up(instance.getQueryInterface())
}

function DropAllTable(instance: Sequelize) {
    UsersTableQuery.down(instance.getQueryInterface())
    TargetsTableQuery.down(instance.getQueryInterface())
    LogsTableQuery.down(instance.getQueryInterface())
}

export {
    CreateAllTable,
    DropAllTable
}