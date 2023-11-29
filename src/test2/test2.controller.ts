/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('test2')
export class Test2Controller {
  @Get()
  getTest2(): string {
    return 'Hello from Test 2!';
  }
}
