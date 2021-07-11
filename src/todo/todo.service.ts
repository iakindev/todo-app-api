import { Injectable } from '@nestjs/common';
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
}
