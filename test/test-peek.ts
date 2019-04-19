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

test('should return most-recently pushed element', t => {
    t.context.stack.push(1)
    t.is(t.context.stack.peek(), 1)
})

test('should error when stack is empty', t => {
    const error = t.throws(() => {
        t.context.stack.peek()
    })
    t.is(error.name, 'AccessError')
})
