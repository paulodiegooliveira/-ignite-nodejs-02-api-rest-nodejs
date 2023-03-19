import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

// if (!process.env.DATABASE_URL) {
//   throw new Error('DATABASE_URL env notfound!')
// }

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './db/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: env.DATABASE_URL,
  },
}

export const knex = setupKnex(config)
