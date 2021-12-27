import { Model, DataTypes } from 'sequelize';
import { db } from '../instance';

class Logs extends Model {
    public readonly id: number
    public targetId: number
    public title: string
    public detail: string
    public date: Date
    public readonly createdAt: Date
    public readonly updatedAt: Date
}

Logs.init({
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
        type: DataTypes.DATEONLY
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
    Logs
}