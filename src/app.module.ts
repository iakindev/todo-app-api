import { Module } from '@nestjs/common';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';
import { PrismaService } from './_prisma/prisma.service';
import { PrismaModule } from './_prisma/prisma.module';

@Module({
  imports: [TodoModule, PrismaModule],
  controllers: [],
  providers: [TodoService, PrismaService],
})
export class AppModule {}
