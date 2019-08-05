import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/database/database.module';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { notesProviders } from './notes.providers';

@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [NotesController],
    providers: [
        NotesService,
        ...notesProviders
    ]
})
export class NotesModule {}
