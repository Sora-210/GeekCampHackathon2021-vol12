import { Model, DataTypes } from 'sequelize'
import { db } from '../instance'

class Users extends Model {
    public readonly id:number
    public name: string
    public email: string
    public password: string
    public token: string
    public createdAt: Date
    public updatedAt: Date
}

Users.init({
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
},{
    sequelize: db,
    timestamps: true
})

export {
    Users
}