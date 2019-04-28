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

test('should throw error when capacity is negative', t => {
    const error = t.throws(() => {
        new Stack(-1)
    })
    t.is(error.name, 'ArgumentError')
})
