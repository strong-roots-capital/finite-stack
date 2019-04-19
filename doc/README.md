
finite-stack [![Build status](https://travis-ci.org/strong-roots-capital/finite-stack.svg?branch=master)](https://travis-ci.org/strong-roots-capital/finite-stack) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/finite-stack.svg)](https://npmjs.org/package/@strong-roots-capital/finite-stack) [![codecov](https://codecov.io/gh/strong-roots-capital/finite-stack/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/finite-stack)
===================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> LIFO stack with finite history

Install
-------

```shell
npm install @strong-roots-capital/finite-stack
```

Use
---

```typescript
import { Stack } from '@strong-roots-capital/finite-stack'

const stack = new Stack<number>()

stack.push(0)
console.log(stack.toArray())
//=>[ 0 ]

stack.push(1)
console.log(stack.toArray())
//=>[ 1, 0 ]

stack.push(2)
console.log(stack.toArray())
//=>[ 2, 1 ]
```

Related
-------

*   [stack-typescript](https://github.com/sfkiwi/stack-typescript)

Acknowledgments
---------------

*   [linked-list-typescript](https://github.com/sfkiwi/linked-list-typescript)

## Index

### Classes

* [Stack](classes/stack.md)

---

