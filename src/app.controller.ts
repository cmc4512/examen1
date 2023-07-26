import { Body, Controller, Get, Param, Post, Req, Put, Delete} from '@nestjs/common';
import { AppService } from './app.service';
import { get, request } from 'http';
import { json } from 'stream/consumers';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  idproduct() {
    return this.appService.index();
 }
  
 @Post()
  createproduct() {
  return this.appService.Create();
}
 
@Put()
 actualizarproduct() {
 return this.appService.Create();
}
  
 @Delete()
 eliminarproduct() {
 return this.appService.Create();

  }    
  }
