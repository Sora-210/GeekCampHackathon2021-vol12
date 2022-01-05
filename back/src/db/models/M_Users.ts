import { Model, DataTypes } from 'sequelize'
import { db } from '../instance'

class Users extends Model {
    public id: string
    public name: string
    public createdAt: Date
    public updatedAt: Date
}

Users.init({
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
},{
    sequelize: db,
    timestamps: true
})

export {
    Users
}