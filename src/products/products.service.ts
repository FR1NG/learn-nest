import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './pruducts.entity';
import { ProductRepository } from './pruducts.repository';

@Injectable()
export class ProductsService {
	constructor(
		@InjectRepository(ProductRepository)
		private ProductRepository : ProductRepository){}

	async findProductById(id: string): Promise<Product>
	{
		const found = await this.ProductRepository.findOne(id);

		if (!found)
			throw new NotFoundException(`product with id ${id} not found`);
		return found;
	}

	async createProduct(dsg: string, price: number): Promise<Product>
	{
		const prosuct = this.ProductRepository.create({
			dsg,
			price
		});
		await this.ProductRepository.save(prosuct);
		return prosuct;
	}
}
