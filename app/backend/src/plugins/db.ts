import fp from 'fastify-plugin'
import { Client } from 'pg';

const client  = new Client({
    user: "admin",
    host: "127.0.0.1",
    password: "a1s2d3f4",
    database: "pgs",
});

export interface SupportPluginOptions {
  // Specify Support plugin options here
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<SupportPluginOptions>(async (fastify, opts) => {
  fastify.decorate('connection', function () {
    client.connect();
  })
})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    connection(): string;
  }
}
