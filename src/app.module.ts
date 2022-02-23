import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "postgres",
      host : "localhost",
      port : 5432,
      username : "postgres",
      password : "password",
      database : "nest",
      autoLoadEntities : true,
      synchronize : true,
    }),
    ProductsModule
  ],
})

export class AppModule {}
