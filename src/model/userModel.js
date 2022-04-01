import { DataTypes } from 'sequelize';

import dbConnection from '../config/db.js';

const Avisos = dbConnection.define(
    'avisos',
    {
        avisosID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        avisosTitulo: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        avisosDesc: {
            type: DataTypes.STRING(250),
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        tableName: 'avisos',
        timestamps: false
    }
);

Avisos.sync();

export default Avisos;
