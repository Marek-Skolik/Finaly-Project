import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductsService) {}

  @Get('/')
  getAll() {
    return this.productService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.productService.getById(id);
    if (!product) throw new Error('Product not found');
    return product;
  }
}