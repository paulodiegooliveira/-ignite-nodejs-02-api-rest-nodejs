import fastify from 'fastify'
// import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  // const tables = await knex("sqlite_schema").select("*");

  // const trasactions = await knex('transactions').insert({
  //   id: crypto.randomUUID(),
  //   title: "Trasação de teste",
  //   amount: 1000
  // })
  // .returning('*')

  const trasactions = await knex('transactions').select('*')

  return trasactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
