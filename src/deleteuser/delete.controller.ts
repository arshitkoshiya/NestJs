/* eslint-disable prettier/prettier */
import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteService } from './delete.service';

@Controller('deleteData')
export class DeleteController {
  constructor(private readonly deleteService: DeleteService) {}

  @Delete(':id')
  deleteUser(@Param('id') id: string): string {
    this.deleteService.deleteUser(id);
    return `User with ID ${id} deleted successfully!`;
  }
}
