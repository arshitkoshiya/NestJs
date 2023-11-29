import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  appUsers(): string {
    return this.appService.appUsers();
  }

  @Get('user')
  appUserById(@Query('id') id: string): string {
    return this.appService.appUserById(id);
  }
}
