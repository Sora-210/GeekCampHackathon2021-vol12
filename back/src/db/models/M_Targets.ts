import { Model, DataTypes } from 'sequelize';
import { db } from '../instance';

class Targets extends Model {
    public readonly id: number
    public userId: number
    public title: string
    public completed: boolean
    public readonly createdAt: Date
    public readonly updatedAt: Date
}

Targets.init({
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
},{
    sequelize: db,
    timestamps: true
})

export {
    Targets
}