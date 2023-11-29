/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { GetService } from './get.service';

@Controller('getData')
export class GetController {
  constructor(private readonly getService: GetService) {}

  @Get()
  getUser(): string {
    return this.getService.getUser();
  }

  @Get('user')
  getUserById(@Query('id') id: string): string {
    return this.getService.getUserById(id);
  }
}
