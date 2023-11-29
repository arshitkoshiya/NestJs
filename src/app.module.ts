import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test1Controller } from './test1/test1.controller';
import { Test2Controller } from './test2/test2.controller';
import { GetModule } from './getusers/get.module';
import { PostModule } from './postusers/post.module';
import { DeleteModule } from './deleteuser/delete.module';
import { UpdateModule } from './updateuser/update.module';

@Module({
  imports: [GetModule, PostModule, DeleteModule, UpdateModule],
  controllers: [AppController, Test1Controller, Test2Controller],
  providers: [AppService],
})
export class AppModule {}
