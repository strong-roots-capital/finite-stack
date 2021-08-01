
finite-stack [![Build status](https://travis-ci.org/strong-roots-capital/finite-stack.svg?branch=master)](https://travis-ci.org/strong-roots-capital/finite-stack) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/finite-stack.svg)](https://npmjs.org/package/@strong-roots-capital/finite-stack) [![codecov](https://codecov.io/gh/strong-roots-capital/finite-stack/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/finite-stack)
===================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Append-only LIFO stack with finite history

Install
-------

```shell
npm install @strong-roots-capital/finite-stack
```

Use
---

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

Related
-------

*   [stack-typescript](https://github.com/sfkiwi/stack-typescript)

Acknowledgments
---------------

*   [linked-list-typescript](https://github.com/sfkiwi/linked-list-typescript)

## Index

### Interfaces

* [EmptyStackBrand](interfaces/emptystackbrand.md)
* [NonEmptyStackBrand](interfaces/nonemptystackbrand.md)

### Type aliases

* [EmptyStack](#emptystack)
* [NonEmptyStack](#nonemptystack)
* [Stack](#stack)

### Functions

* [isEmptyStack](#isemptystack)
* [isNonEmptyStack](#isnonemptystack)
* [peek](#peek)
* [push](#push)
* [size](#size)
* [stack](#stack)
* [toArray](#toarray)

---

## Type aliases

<a id="emptystack"></a>

###  EmptyStack

**Ƭ EmptyStack**: *[Stack](#stack)<`T`> & [EmptyStackBrand](interfaces/emptystackbrand.md)*

*Defined in [finite-stack.ts:22](https://github.com/strong-roots-capital/finite-stack/blob/116996e/src/finite-stack.ts#L22)*

___
<a id="nonemptystack"></a>

###  NonEmptyStack

**Ƭ NonEmptyStack**: *[Stack](#stack)<`T`> & [NonEmptyStackBrand](interfaces/nonemptystackbrand.md)*

*Defined in [finite-stack.ts:24](https://github.com/strong-roots-capital/finite-stack/blob/116996e/src/finite-stack.ts#L24)*

___
<a id="stack"></a>

###  Stack

**Ƭ Stack**: *`object`*

*Defined in [finite-stack.ts:8](https://github.com/strong-roots-capital/finite-stack/blob/116996e/src/finite-stack.ts#L8)*

#### Type declaration

___

## Functions

<a id="isemptystack"></a>

### `<Const>` isEmptyStack

▸ **isEmptyStack**<`T`>(stack: *[Stack](#stack)<`T`>*): `boolean`

*Defined in [finite-stack.ts:26](https://github.com/strong-roots-capital/finite-stack/blob/116996e/src/finite-stack.ts#L26)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| stack | [Stack](#stack)<`T`> |

**Returns:** `boolean`

___
<a id="isnonemptystack"></a>

### `<Const>` isNonEmptyStack

▸ **isNonEmptyStack**<`T`>(stack: *[Stack](#stack)<`T`>*): `boolean`

*Defined in [finite-stack.ts:29](https://github.com/strong-roots-capital/finite-stack/blob/116996e/src/finite-stack.ts#L29)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| stack | [Stack](#stack)<`T`> |

**Returns:** `boolean`

___
<a id="peek"></a>

### `<Const>` peek

▸ **peek**<`T`>(stack: *[NonEmptyStack](#nonemptystack)<`T`>*): `T`

*Defined in [finite-stack.ts:54](https://github.com/strong-roots-capital/finite-stack/blob/116996e/src/finite-stack.ts#L54)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| stack | [NonEmptyStack](#nonemptystack)<`T`> |

**Returns:** `T`

___
<a id="push"></a>

### `<Const>` push

▸ **push**<`T`>(value: *`T`*): `(Anonymous function)`

*Defined in [finite-stack.ts:40](https://github.com/strong-roots-capital/finite-stack/blob/116996e/src/finite-stack.ts#L40)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |

**Returns:** `(Anonymous function)`

___
<a id="size"></a>

### `<Const>` size

▸ **size**(stack: *[Stack](#stack)<`unknown`>*): `number`

*Defined in [finite-stack.ts:56](https://github.com/strong-roots-capital/finite-stack/blob/116996e/src/finite-stack.ts#L56)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stack | [Stack](#stack)<`unknown`> |

**Returns:** `number`

___
<a id="stack"></a>

### `<Const>` stack

▸ **stack**<`T`>(capacity: *`number`*): [EmptyStack](#emptystack)<`T`>

*Defined in [finite-stack.ts:32](https://github.com/strong-roots-capital/finite-stack/blob/116996e/src/finite-stack.ts#L32)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| capacity | `number` |

**Returns:** [EmptyStack](#emptystack)<`T`>

___
<a id="toarray"></a>

### `<Const>` toArray

▸ **toArray**<`T`>(stack: *[Stack](#stack)<`T`>*): `T`[]

*Defined in [finite-stack.ts:58](https://github.com/strong-roots-capital/finite-stack/blob/116996e/src/finite-stack.ts#L58)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| stack | [Stack](#stack)<`T`> |

**Returns:** `T`[]

___

