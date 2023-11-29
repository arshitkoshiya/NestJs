/* eslint-disable prettier/prettier */
import { Controller, Put, Param, Body } from '@nestjs/common';
import { UpdateService } from './update.service';

@Controller('updateData')
export class UpdateController {
  constructor(private readonly updateService: UpdateService) {}

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updatedUser: any): string {
    this.updateService.updateUser(id, updatedUser);
    return `User with ID ${id} updated successfully!`;
  }
}
