import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { threadId } from 'worker_threads';
import { ProductsService } from './products.service';
import { Product } from './pruducts.entity';


@Controller('products')
export class ProductsController {
	constructor(private ProductsService : ProductsService){}

	@Get('/:id')
	handleGet(@Param('id') id: string) : Promise<Product>
	{
		return this.ProductsService.findProductById(id);
	}
	@Post()
	handlePost(@Body('dsg') dsg: string, @Body('price') price: number): Promise<Product>
	{
		return this.ProductsService.createProduct(dsg, price);
	}
}