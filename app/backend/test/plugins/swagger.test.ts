import { test } from 'tap'
import Fastify from 'fastify'
import swagger from '../../src/plugins/swagger'


test('swagger pgs API',async (t:any) => {
    const fastify = Fastify()
    void fastify.register(swagger)
    await fastify.ready()

    // t.equal(fastify.someSupport(), 'hugs')

    // Tear down our app after we are done
    t.teardown(() =>  void fastify.close())
})