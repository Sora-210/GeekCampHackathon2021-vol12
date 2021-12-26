import { QueryInterface, DataTypes } from "sequelize";

const UsersTableQuery = {
    up: (QueryInterface: QueryInterface) => {
        return QueryInterface.createTable('Users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING
            },
            name: {
                allowNull: false,
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