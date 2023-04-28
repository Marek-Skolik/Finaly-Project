import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { Order } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  async create(order: Order): Promise<Order> {
    return await this.prismaService.order.create({ data: order });
  }
}