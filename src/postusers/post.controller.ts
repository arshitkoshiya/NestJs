/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('postData')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('addUser')
  addUser(@Body() user: any): string {
    this.postService.addNewUser(user);
    return 'User added successfully!';
  }
}
