import { Module } from '@nestjs/common';
import { PostService } from './posts.service';
import { PostsController } from './posts.controller';
import { postsProviders } from './posts.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [ DatabaseModule ],
    controllers: [PostsController],
    providers: [
        PostService,
        ...postsProviders,
    ]
})
export class PostsModule {}
