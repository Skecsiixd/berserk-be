import { Module } from '@nestjs/common';
import { PostsController } from './controller/posts.controller'; // Helyes import
import { PostsService } from './services/posts.service'; // Helyes import
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './models/posts.entity';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports:[TypeOrmModule.forFeature([
      PostEntity
    ]),]
})
export class PostsModule {}