import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasController } from './tareas/controllers/tareas.controller';
import { TareasModule } from './tareas/modules/tareas.module';
import { TareasService } from './tareas/services/tareas.service';
import { MongooseModule} from '@nestjs/mongoose';
import { TareaSchema } from './tareas/schemas/tarea.schema';

//arranca la aplicacion
@Module({
  imports: [TareasModule, MongooseModule.forRoot('mongodb://localhost/nest-tutorial', {
    useNewUrlParser: true
  }), MongooseModule.forFeature([{ name: 'Tarea', schema: TareaSchema }])],
  controllers: [AppController, TareasController],
  providers: [AppService, TareasService],
})
export class AppModule {}
