import { Connection } from 'mongoose';

import { PostSchema } from './posts.schema';
import { DB_PROVIDER, POST_MODEL_PROVIDER } from '../config';

export const postsProviders = [
    {
        provide: POST_MODEL_PROVIDER,
        useFactory: (con: Connection) => con.model('Post', PostSchema),
        inject: [DB_PROVIDER]
    }
]
