import fp from 'fastify-plugin'
// import { Client } from 'pg';
const pgp = require('pg-promise')();

import appConfig from '../config/appConfig'

// const client  = new Client({
//     user: "admin",
//     host: "127.0.0.1",
//     password: "a1s2d3f4",
//     database: "pgs",
// });

export interface SupportPluginOptions {
  // Specify Support plugin options here
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<SupportPluginOptions>(async (fastify, opts) => {

  const db = pgp(appConfig.postgresUri)
  fastify.decorate('connection', db)
  // fastify.decorate('connection', function () {
  //   // client.connect();
  //   fastify.log.info(appConfig.postgresUri);
    
     
  // })
})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    connection(): string;
  }
}
