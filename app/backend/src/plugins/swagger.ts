import fp from "fastify-plugin";

export interface SupportPluginOptions{
    // Specify Support plugin options here
}

export default fp<SupportPluginOptions>(async (fastify, opts) => {
    fastify.decorate('swagger', function(){
        fastify.register(require('fastify-swagger'), {
            routePrefix: '/swagger',
            swagger: {
              info: {
                title: 'PGS API',
                description: 'Testing the PGS swagger API',
                version: '0.1.0'
              },
              externalDocs: {
                url: 'https://swagger.io',
                description: 'Find more info here'
              },
              host: 'localhost',
              schemes: ['http'],
              consumes: ['application/json'],
              produces: ['application/json'],
            //   tags: [
            //     { name: 'user', description: 'User related end-points' },
            //     { name: 'code', description: 'Code related end-points' }
            //   ],
            //   definitions: {
            //     User: {
            //       type: 'object',
            //       required: ['id', 'email'],
            //       properties: {
            //         id: { type: 'string', format: 'uuid' },
            //         firstName: { type: 'string' },
            //         lastName: { type: 'string' },
            //         email: {type: 'string', format: 'email' }
            //       }
            //     }
            //   },
            //   securityDefinitions: {
            //     apiKey: {
            //       type: 'apiKey',
            //       name: 'apiKey',
            //       in: 'header'
            //     }
            //   }
            },
            uiConfig: {
              docExpansion: 'full',
              deepLinking: false
            },
            uiHooks: {
              onRequest: function (request : any, reply: any, next : any) { next() },
              preHandler: function (request : any, reply: any, next : any) { next() }
            },
            staticCSP: true,
            transformStaticCSP: (header : any) => header,
            exposeRoute: true
          })
    })

})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
    export interface FastifyInstance {
      swagger(): object;
    }
  }