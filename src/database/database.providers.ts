import * as mongoose from 'mongoose';

import { DB_PROVIDER } from '../config';

export const databaseProviders = [
    {
        provide: DB_PROVIDER,
        useFactory: async () => {
            (mongoose as any).Promise = global.Promise;

            return await mongoose.connect('mongodb://localhost/heyrafin');
        }
    }
]
