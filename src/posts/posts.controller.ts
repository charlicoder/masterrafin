import { Controller, Body, Post, Get } from '@nestjs/common';

import { PostService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { IPost } from './interfaces/posts.interface';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostService) {}

    @Post()
    async createPost(@Body() createPostDto: CreatePostDto) {
        return this.postService.create(createPostDto);
    }

    @Get()
    async getAllPosts(): Promise<IPost[]> {
        return this.postService.findAllPosts();
    }
}
