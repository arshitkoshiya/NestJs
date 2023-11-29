/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { StaticData } from '../user';

@Injectable()
export class DeleteService {

  deleteUser(id: string): void {
    const index = StaticData.users.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    StaticData.users.splice(index, 1);
  }
}
