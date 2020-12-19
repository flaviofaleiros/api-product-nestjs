import { Product } from './products.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class ProductsService {
constructor(
  @InjectModel(Product)
  private productModel: typeof Product) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  async findOne(id: number): Promise<Product> {
    return this.productModel.findByPk(id);
  }

  async insert(product: Product) {
    return this.productModel.create(product);
  }

  async update(product: Product): Promise<[number, Product[]]> {
    return this.productModel.update(product, {
      where: {
        id: product.id
      }
    });
  }

  async delete(id: number) {
  const product : Product = await this.findOne(id);
    product.destroy()
  }
}
