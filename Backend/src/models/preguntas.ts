import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Preguntas = db.define('preguntas', {

    pregunta: {
        type: DataTypes.STRING
    }
    
    
}, {
    createdAt: false,
    updatedAt: false
});

export default Preguntas;