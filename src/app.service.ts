import { Injectable, NotFoundException } from '@nestjs/common';
import { StaticData } from './user';

@Injectable()
export class AppService {
  appUsers(): any {
    console.log(StaticData.users);
    return StaticData.users;
  }

  appUserById(id: string): any {
    const user = StaticData.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    console.log(user, 'id');
    return user;
  }
}
