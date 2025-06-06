import { Controller, Post, Body, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { PostsService } from '../services/posts.service'; // Helyes import
import { CreatePostDto } from '../dto/create-post.dto';
import { Post as PostInterface } from '../interfaces/post.interface';

@Controller('posts') // A végpont útvonala: http://localhost:3000/posts
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post() // POST kérést fogad
  @HttpCode(HttpStatus.CREATED) // HTTP 201 Created státuszkód válasz
  create(@Body() createPostDto: CreatePostDto) {
    console.log('🎉 Adatok érkeztek a backendre:', createPostDto);
    return this.postsService.create(createPostDto);
  }

  @Get() // GET kérést fogad (pl. a böngészőben megnézheted az eltárolt posztokat)
  findAll(){
    return this.postsService.findAll();
  }
}