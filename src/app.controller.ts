import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


//rutas del servidor. manejar las peticiones que llegan desde el usuario
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

/*   @Get()
  getHello(): string {
    return this.appService.getHello();
  } */
}
