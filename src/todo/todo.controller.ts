import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
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

  @Post('/')
  public async create(@Body() body: Prisma.TodoCreateInput) {
    return this.todoService.create(body);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string) {
    return this.todoService.delete(Number(id));
  }
}
