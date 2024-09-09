import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('random-number')
  getRandomNumber(): {value: number} {
    const num = Math.floor(Math.random()*100)+1
    console.log(`Salió el numero ${num}`)
    return { value: num }
  }

  @Get('/')
  greeting(): string {
    return 'Hola, soy Alvaro Signorio. Bienvenidos a mi prueba de Nestjs'
  }

  @Get('notfound')
  @HttpCode(404)
  notFoundPage(){
    return '404 not found'
  }

}