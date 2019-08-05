import { Connection } from 'mongoose';

import { NoteSchema } from './schemas/note.schema';
import { DB_PROVIDER } from '../config';

export const notesProviders = [
    {
        provide: 'NOTES_PROVIDER',
        useFactory: (con: Connection) => con.model('Note', NoteSchema),
        inject: [DB_PROVIDER]
    }
]
