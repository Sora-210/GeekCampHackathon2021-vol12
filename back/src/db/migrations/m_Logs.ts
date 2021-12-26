import { QueryInterface, DataTypes } from 'sequelize';

const LogsTableQuery = {
    up: (QueryInterface: QueryInterface) => {
        return QueryInterface.createTable('Logs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            targetId: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING
            },
            detail: {
                allowNull: true,
                type: DataTypes.STRING
            },
            date: {
                allowNull: false,
                type: DataTypes.DATE
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
            }
        })
    },
    down: (QueryInterface: QueryInterface) => {
        return QueryInterface.dropTable('Logs')
    }
}

export {
    LogsTableQuery
}