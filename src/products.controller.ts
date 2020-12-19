import { Product } from './products.model';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './Products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  async indAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Product>{
    return this.productService.findOne(params.id);
  }

  @Post()
  async insert(@Body() product: Product) {
    return this.productService.insert(product);
  }

  @Put()
  async update(@Body() product: Product): Promise<[number, Product[]]> {
    return this.productService.update(product);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return this.productService.delete(params.id);
  }
}
