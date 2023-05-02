import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';
import { ProductsService } from './products.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProductController],
  providers: [ProductsService],
  imports: [PrismaModule],
})
export class ProductsModule {}
