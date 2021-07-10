import { Module } from '@nestjs/common';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: [TodoService],
})
export class AppModule {}
