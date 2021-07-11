import { Controller, Get, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/')
  public async getMany() {
    return this.todoService.getMany();
  }

  @Get('/:id')
  public async getOne(@Param('id') id: string) {
    return this.todoService.getOne(Number(id));
  }
}
