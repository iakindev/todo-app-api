import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { PrismaService } from '../_prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}
  public async create(todo: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({
      data: { title: todo.title, content: todo.content },
    });
  }

  public async getMany(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  public async getOne(id: number): Promise<Todo> {
    return this.prisma.todo.findFirst({ where: { id } });
  }

  public async updateOne(
    id: number,
    data: Prisma.TodoUpdateInput,
  ): Promise<Todo> {
    return this.prisma.todo.update({ where: { id }, data });
  }

  public async delete(id: number): Promise<Todo> {
    return this.prisma.todo.delete({ where: { id } });
  }
}
