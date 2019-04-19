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

test('should return true on empty stack', t => {
    t.true(t.context.stack.isEmpty())
})

test('should return false on non-empty stack', t => {
    t.context.stack.push(1)
    t.false(t.context.stack.isEmpty())
})
