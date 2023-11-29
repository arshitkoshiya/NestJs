/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('test1')
export class Test1Controller {
  @Get()
  getTest1(): string {
    return 'Hello from Test 1!';
  }
}
