import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModel } from './models/Product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [ProductModel],
      synchronize: true
    }),
    
    TypeOrmModule.forFeature([ProductModel])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
