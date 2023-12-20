import * as dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { migrate } from 'drizzle-orm/postgres-js/migrator';
import * as schema from '../../../migrations/schema';

dotenv.config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
   console.log('Cannot find database url');
}
const client = postgres(process.env.DATABASE_URL as string, {
   max: 1,
});

const db = drizzle(client, { schema });

const migrateDb = async () => {
   try {
      await migrate(db, { migrationsFolder: 'migrations' });
      console.log('🛫 Migrated client');
   } catch (error) {}
   console.log('Error occured');
};

migrateDb();
export default db;
