import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PostsModule } from './posts/posts.module';
import { NotesModule } from './notes/notes.module';

@Module({
    imports: [DatabaseModule, PostsModule, NotesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
