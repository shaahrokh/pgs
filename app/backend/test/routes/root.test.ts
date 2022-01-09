import { test } from 'tap'
import { build } from '../helper'

test('default root route',async (t) => {
    const app = await build(t)

    const res = await app.inject({
        url: '/'
    })
    t.equal(res.statusCode, 200, 'returns a status code of 200')
    t.equal(res.headers['content-type'], 'application/json; charset=utf-8')
    t.same(JSON.parse(res.payload), {status: 'ok'})
    
    
})