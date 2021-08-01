/**
 * finite-stack
 * LIFO stack with finite history
 */

import { LinkedList } from 'linked-list-typescript'

export type Stack<T> = {
  readonly capacity: number
  readonly _values: LinkedList<T>
  readonly type: 'EmptyStack' | 'NonEmptyStack'
}

export interface EmptyStackBrand {
  readonly type: 'EmptyStack'
}

export interface NonEmptyStackBrand {
  readonly type: 'NonEmptyStack'
}

export type EmptyStack<T> = Stack<T> & EmptyStackBrand

export type NonEmptyStack<T> = Stack<T> & NonEmptyStackBrand

export const isEmptyStack = <T>(stack: Stack<T>): stack is EmptyStack<T> =>
  stack.type === 'EmptyStack'

export const isNonEmptyStack = <T>(stack: Stack<T>): stack is NonEmptyStack<T> =>
  stack.type === 'NonEmptyStack'

export const stack = <T>(capacity: number): EmptyStack<T> => {
  return {
    capacity: Math.max(capacity, 0),
    _values: new LinkedList(),
    type: 'EmptyStack',
  }
}

export const push = <T>(value: T) => (
  stack: Stack<T>,
): NonEmptyStack<T> => {
  stack._values.prepend(value)
  if (stack.capacity < stack._values.length) {
    stack._values.removeTail()
  }
  return {
    capacity: stack.capacity,
    _values: stack._values,
    type: 'NonEmptyStack',
  }
}

export const peek = <T>(stack: NonEmptyStack<T>): T => stack._values.head

export const size = (stack: Stack<unknown>): number => stack._values.length

export const toArray = <T>(stack: Stack<T>): T[] => stack._values.toArray()
