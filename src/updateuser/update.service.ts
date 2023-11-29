/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { StaticData } from '../user';

@Injectable()
export class UpdateService {
  updateUser(id: string, updatedUser: any): void {
    const index = StaticData.users.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    StaticData.users[index] = { ...StaticData.users[index], ...updatedUser };
  }
}
