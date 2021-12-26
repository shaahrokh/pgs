import { FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

    fastify.route({
        method: 'GET',
        url: '/',
        handler :async (request, reply) => {
            return {root: true}
        }
    });

    // fastify.get('/',async (request, reply) => {
    //     return {root: true};
    // })    
}

export default root;