import { Module } from '@nestjs/common';
import { TareasService } from '../services/tareas.service';
import { TareasController } from '../controllers/tareas.controller';
import { TareaSchema } from '../schemas/tarea.schema';
import { MongooseModule } from '@nestjs/mongoose';

// @Module({
//     imports: [MongooseModule.forFeature([
//         {name: 'Tarea', schema: TareaSchema}
//     ])],
//     controllers: [TareasController],
//     providers: [TareasService]
// })
export class TareasModule {}
