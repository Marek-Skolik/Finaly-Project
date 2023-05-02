import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from './products.interface';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public async getAll(): Promise<Product[]> {
    const products = await this.prismaService.product.findMany({
    });
    return products.map(product => ({
      ...product,
      photo: product.photo.toString(),
      photo2: product.photo2.toString(),
    }));
  }

  public async getById(id: Product['id']): Promise<Product | null> {
    const product = await this.prismaService.product.findUnique({
      where: { id },
    });
    if (!product) {
      return null;
    }
    return {
      ...product,
      photo: product.photo.toString(),
      photo2: product.photo2.toString(),
    };
  }
}
