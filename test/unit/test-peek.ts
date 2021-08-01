import anyTest, { TestInterface } from 'ava'

/**
 * Library under test
 */

import * as Stack from '../../src/finite-stack'

interface TestContext {
  stack: Stack.Stack<number>
}

const test = anyTest as TestInterface<TestContext>

test.beforeEach((t) => {
  t.context.stack = Stack.stack(2)
})

/*********************************************************************
 * Test cases
 ********************************************************************/

test('should return most-recently pushed element', (t) => {
  const nonEmptyStack = Stack.push(1)(t.context.stack)
  t.is(Stack.peek(nonEmptyStack), 1)
})
