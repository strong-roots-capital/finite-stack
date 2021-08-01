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

test('should prepend an element', (t) => {
  t.deepEqual(Stack.toArray(t.context.stack), [])
  Stack.push(1)(t.context.stack)
  t.deepEqual(Stack.toArray(t.context.stack), [1])
  Stack.push(2)(t.context.stack)
  t.deepEqual(Stack.toArray(t.context.stack), [2, 1])
})

test('should prepend an element until capacity is reached', (t) => {
  t.deepEqual(Stack.toArray(t.context.stack), [])
  Stack.push(1)(t.context.stack)
  t.deepEqual(Stack.toArray(t.context.stack), [1])
  Stack.push(2)(t.context.stack)
  t.deepEqual(Stack.toArray(t.context.stack), [2, 1])
  Stack.push(3)(t.context.stack)
  t.deepEqual(Stack.toArray(t.context.stack), [3, 2])
})
