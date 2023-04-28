import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public getAll() {
    return this.prismaService.product.findMany();
  }

  public async getById(id: Product['id']): Promise<Product> {
    const product = await this.prismaService.product.findUnique({
      where: { id },
    });
    if(!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }
}
