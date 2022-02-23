import { EntityRepository, Repository } from "typeorm";
import { Product } from "./pruducts.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

}