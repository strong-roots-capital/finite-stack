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

test('should return empty array when stack is empty', (t) => {
  t.deepEqual(Stack.toArray(t.context.stack), [])
})

test('should return stack as array when stack is not empty', (t) => {
  Stack.push(1)(t.context.stack)
  t.deepEqual(Stack.toArray(t.context.stack), [1])
  Stack.push(2)(t.context.stack)
  t.deepEqual(Stack.toArray(t.context.stack), [2, 1])
  Stack.push(3)(t.context.stack)
  t.deepEqual(Stack.toArray(t.context.stack), [3, 2])
})
