/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { StaticData } from '../user';

@Injectable()
export class PostService {
  addNewUser(user: any): void {
    StaticData.users.push(user);
  }
}
