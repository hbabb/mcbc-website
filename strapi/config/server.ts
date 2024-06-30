import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from the project root .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
