import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { IPost } from './interfaces/posts.interface'
import { POST_MODEL_PROVIDER } from 'src/config';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
    constructor(@Inject(POST_MODEL_PROVIDER) private readonly postModel: Model<IPost>) {}

    async create(createPostDto: CreatePostDto): Promise<IPost> {
        const newPost = new this.postModel(createPostDto);
        return await newPost.save();
    }

    async findAllPosts(): Promise<IPost[]> {
        return await this.postModel.find().exec();
    }
}
