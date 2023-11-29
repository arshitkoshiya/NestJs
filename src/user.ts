/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class StaticData {
  static users: any[] = [
    { id: '1', Firstname: 'First1', Lastname: 'Last1', age: 21 },
    { id: '2', Firstname: 'First2', Lastname: 'Last2', age: 22 },
    { id: '3', Firstname: 'First3', Lastname: 'Last3', age: 23 },
    { id: '4', Firstname: 'First4', Lastname: 'Last4', age: 24 },
    { id: '5', Firstname: 'First5', Lastname: 'Last5', age: 25 },
  ];
}
