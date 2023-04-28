import { Controller, Get, Post, ParseUUIDPipe, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('books')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  getAll() {
    return this.productsService.getAll();
  }

  @Get('/:id')
  getById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.productsService.getById(id);
  }
}