import { Module } from '@nestjs/common';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';
import { PrismaService } from './_prisma/prisma.service';

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: [TodoService, PrismaService],
})
export class AppModule {}
