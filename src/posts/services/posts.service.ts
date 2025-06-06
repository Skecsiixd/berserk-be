// src/posts/services/posts.service.ts
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { Post } from '../interfaces/post.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from '../models/posts.entity';
import { Repository } from 'typeorm';
import { from, take } from 'rxjs';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ){
  }
  create(post: CreatePostDto) {
    const newPost = new PostEntity();
    newPost.content = post.content;
    newPost.title = post.title;
    return from(this.postRepository.save(newPost)) ;
  }

  findAll() { // Példaként egy GET végponthoz
    return from(this.postRepository.find()).pipe(take(1));
  }
}