import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../_prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  public async getMany() {
    return this.prisma.todo.findMany();
  }

  public async getOne(id: number) {
    return this.prisma.todo.findFirst({ where: { id } });
  }

  public async create(todo: Prisma.TodoCreateInput) {
    return this.prisma.todo.create({
      data: { title: todo.title, content: todo.content },
    });
  }

  public async delete(id: number) {
    return this.prisma.todo.delete({ where: { id } });
  }
}
