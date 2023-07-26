import { Injectable } from '@nestjs/common';
import { ProductModel } from './models/Product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ProductModel)
    private user: Repository<ProductModel>
  ){}
  
  public index() {
    return this.user.find();
  }
  
  findOne(id: number): Promise<ProductModel | null> {
    return this.user.findOneBy({ id });

 }
  Create(): Promise<ProductModel> {
    const example = this.user.create({username: 'usuario'});
    return this.user.save(example);
  }

  Actualizar(): Promise<ProductModel> {
    const example = this.user.create({userdescription: 'description'});
    return this.user.save(example);
  }

  Delete(): Promise<ProductModel> {
    const example = this.user.create({userquantity: 'cantidad'});
    return this.user.save(example);
  
 }
}