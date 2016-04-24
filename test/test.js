import test from 'ava'
import trav from '..'

test(t => {
  t.deepEqual(trav({foo: 'bar'}, 'foo', wat => `${wat}/42`), { foo: 'bar/42'})
})
