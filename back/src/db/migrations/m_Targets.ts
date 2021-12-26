import { QueryInterface, DataTypes } from "sequelize";

const TargetsTableQuery = {
    up: (QueryInterface: QueryInterface) => {
        return QueryInterface.createTable('Targets', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING
            },
            completed: {
                allowNull: false,
                defaultValue: false,
                type: DataTypes.BOOLEAN
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
        return QueryInterface.dropTable('Targets')
    }
}

export {
    TargetsTableQuery
}