import { Document } from 'mongoose';

export interface Tarea extends Document {
    id?: number,
    titulo: string;
	descripcion: string;
	responsable: string;
	prioridad: string;
}