import { QueryInterface, DataTypes } from "sequelize";

const UsersTableQuery = {
    up: (QueryInterface: QueryInterface) => {
        return QueryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING
            },
            password: {
                allowNull: true,
                type: DataTypes.STRING
            },
            token: {
                allowNull: true,
                type: DataTypes.STRING
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
        return QueryInterface.dropTable('Users')
    }
}

export {
    UsersTableQuery
}