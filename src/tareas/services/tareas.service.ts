import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tarea } from '../interfaces/Tarea';
import { Model } from 'mongoose';
import { TareaDto } from '../dto/tarea.dto';

@Injectable()
export class TareasService {

   constructor(@InjectModel('Tarea') private tareaModel: Model<Tarea>) {
       
   }

    async getTareas() {
        return await this.tareaModel.find();
    }

    async getTarea(id) {
        return await this.tareaModel.findById(id);
    }

    async crearTarea(tarea: TareaDto){
        const nuevaTarea = new this.tareaModel(tarea);
        return await nuevaTarea.save();
    }

    async borrarTarea(id){
        const tarea = await this.tareaModel.findById(id);
        return await tarea.remove();
    }

}
