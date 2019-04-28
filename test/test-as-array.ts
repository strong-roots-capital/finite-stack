import anyTest, { TestInterface } from 'ava'

/**
 * Library under test
 */

import { Stack } from '../src/finite-stack'


interface TestContext {
    stack: Stack<number>;
}

const test = anyTest as TestInterface<TestContext>;


test.beforeEach(t => {
    t.context.stack = new Stack(2)
})


/*********************************************************************
 * Test cases
 ********************************************************************/

test('should return empty array when stack is empty', t => {
    t.deepEqual(t.context.stack.toArray(), [])
})

test('should return stack as array when stack is not empty', t => {
    t.context.stack.push(1)
    t.deepEqual(t.context.stack.toArray(), [1])
    t.context.stack.push(2)
    t.deepEqual(t.context.stack.toArray(), [2, 1])
    t.context.stack.push(3)
    t.deepEqual(t.context.stack.toArray(), [3, 2])
})
