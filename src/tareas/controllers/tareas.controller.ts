import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { TareaDto } from '../dto/tarea.dto';

import { Tarea } from '../interfaces/Tarea';
import { TareasService } from '../services/tareas.service';

@Controller('tareas')
export class TareasController {

    constructor(private tareaService: TareasService){}
    
    @Get()
    getTareas(): Promise<Tarea[]> {
       return this.tareaService.getTareas();
    }

    @Get(':id')
    getTarea(@Param('id') id: string){
       return this.tareaService.getTarea(id);
    }

    @Post()
    createTareas(@Body() tarea: TareaDto): Promise<Tarea> {
        return this.tareaService.crearTarea(tarea);
    }

    @Delete(':id')
    borrarTarea(@Param('id') id): Promise<Tarea> {
        return this.tareaService.borrarTarea(id);
    }

    @Put(':id')
    actualizarTarea(@Body() nuevaTarea: TareaDto, @Param('id') id): string{
        console.log(nuevaTarea);
        console.log(id);
        return 'actualizando tarea';
    }

    




}
