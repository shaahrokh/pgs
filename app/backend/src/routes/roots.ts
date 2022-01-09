import { FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

    fastify.route({
        method: 'GET',
        url: '/',
        schema : {
            // tags: ['HealthCheck'],
            response: {
                200: {
                    type: 'object',
                    properties: {
                        status: { type: 'string' },
                        // timestamp: { type: 'string', format: 'date-time'},
                    }
                }
            }
        },
        handler :async (request, reply) => {
            return {
                status: 'ok', 
                // timestamp: new Date().toISOString()
            }
        }
    });

    // fastify.get('/', { schema }, async (request, reply) => {
    //     return {root: true};
    // })    
}

export default root;