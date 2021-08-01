# finite-stack [![Build status](https://travis-ci.org/strong-roots-capital/finite-stack.svg?branch=master)](https://travis-ci.org/strong-roots-capital/finite-stack) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/finite-stack.svg)](https://npmjs.org/package/@strong-roots-capital/finite-stack) [![codecov](https://codecov.io/gh/strong-roots-capital/finite-stack/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/finite-stack)

> Append-only LIFO stack with finite history

## Install

```shell
npm install @strong-roots-capital/finite-stack
```

## Use

```typescript
import * as Stack from '@strong-roots-capital/finite-stack'

const emptyStack: Stack.EmptyStack<number> = Stack.stack<number>(2)

let nonEmptyStack: Stack.NonEmptyStack<number> = Stack.push(0)(emptyStack)
console.log(Stack.toArray(nonEmptyStack))
//=>[ 0 ]

nonEmptyStack = Stack.push(1)(nonEmptyStack)
console.log(Stack.toArray(nonEmptyStack))
//=>[ 1, 0 ]

nonEmptyStack = Stack.push(2)(nonEmptyStack)
console.log(Stack.toArray(nonEmptyStack))
//=>[ 2, 1 ]
```

## Related

- [stack-typescript](https://github.com/sfkiwi/stack-typescript)

## Acknowledgments

- [linked-list-typescript](https://github.com/sfkiwi/linked-list-typescript)
