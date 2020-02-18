import { Schema } from 'mongoose';

export const TareaSchema = new Schema({
    titulo: String,
	descripcion: String,
	responsable: String,
	prioridad: String
})