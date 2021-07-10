import { Controller, Get, Res } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get('/')
  public getAll() {
    return 'Test';
  }
}
