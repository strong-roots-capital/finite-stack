import anyTest, { TestInterface } from 'ava'

/**
 * Library under test
 */

import { Stack } from '../src/finite-stack'


interface TestContext {
    stack: Stack<number>
}

const test = anyTest as TestInterface<TestContext>;


test.beforeEach(t => {
    t.context.stack = new Stack(2)
})


/*********************************************************************
 * Test cases
 ********************************************************************/

test('should prepend an element', t => {
    t.deepEqual(t.context.stack.list.toArray(), [])
    t.context.stack.push(1)
    t.deepEqual(t.context.stack.list.toArray(), [1])
    t.context.stack.push(2)
    t.deepEqual(t.context.stack.list.toArray(), [2, 1])
})

test('should prepend an element until capacity is reached', t => {
    t.deepEqual(t.context.stack.list.toArray(), [])
    t.context.stack.push(1)
    t.deepEqual(t.context.stack.list.toArray(), [1])
    t.context.stack.push(2)
    t.deepEqual(t.context.stack.list.toArray(), [2, 1])
    t.context.stack.push(3)
    t.deepEqual(t.context.stack.list.toArray(), [3, 2])
})
