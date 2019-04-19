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

test('should return zero on empty stack', t => {
    t.is(0, t.context.stack.size)
})

test('should return size of non-empty stack', t => {
    t.context.stack.push(1)
    t.is(1, t.context.stack.size)
    t.context.stack.push(2)
    t.is(2, t.context.stack.size)
    t.context.stack.push(3)
    t.is(2, t.context.stack.size)
})
