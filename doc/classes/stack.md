[finite-stack](../README.md) > [Stack](../classes/stack.md)

# Class: Stack

Generically-typed stack with finite length.

## Type parameters
#### T 
## Hierarchy

**Stack**

## Index

### Constructors

* [constructor](stack.md#constructor)

### Properties

* [capacity](stack.md#capacity)
* [list](stack.md#list)

### Accessors

* [size](stack.md#size)

### Methods

* [isEmpty](stack.md#isempty)
* [peek](stack.md#peek)
* [push](stack.md#push)
* [toArray](stack.md#toarray)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Stack**(capacity?: *`number`*): [Stack](stack.md)

*Defined in [finite-stack.ts:16](https://github.com/strong-roots-capital/finite-stack/blob/e99190c/src/finite-stack.ts#L16)*

Create a stack with specified capacity.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` capacity | `number` | 2 |  Capacity of created stack |

**Returns:** [Stack](stack.md)

___

## Properties

<a id="capacity"></a>

###  capacity

**● capacity**: *`number`*

*Defined in [finite-stack.ts:15](https://github.com/strong-roots-capital/finite-stack/blob/e99190c/src/finite-stack.ts#L15)*

___
<a id="list"></a>

###  list

**● list**: *`LinkedList`<`T`>*

*Defined in [finite-stack.ts:16](https://github.com/strong-roots-capital/finite-stack/blob/e99190c/src/finite-stack.ts#L16)*

___

## Accessors

<a id="size"></a>

###  size

**get size**(): `number`

*Defined in [finite-stack.ts:33](https://github.com/strong-roots-capital/finite-stack/blob/e99190c/src/finite-stack.ts#L33)*

Return quantity of elements in stack.

**Returns:** `number`
Number of elements in stack

___

## Methods

<a id="isempty"></a>

###  isEmpty

▸ **isEmpty**(): `boolean`

*Defined in [finite-stack.ts:66](https://github.com/strong-roots-capital/finite-stack/blob/e99190c/src/finite-stack.ts#L66)*

Test if the stack contains no elements.

**Returns:** `boolean`
True if stack has had no elements pushed

___
<a id="peek"></a>

###  peek

▸ **peek**(): `T`

*Defined in [finite-stack.ts:54](https://github.com/strong-roots-capital/finite-stack/blob/e99190c/src/finite-stack.ts#L54)*

Returns the most-recently pushed element in the stack.

**Returns:** `T`
Most recently-pushed element in stack

___
<a id="push"></a>

###  push

▸ **push**(element: *`T`*): `void`

*Defined in [finite-stack.ts:42](https://github.com/strong-roots-capital/finite-stack/blob/e99190c/src/finite-stack.ts#L42)*

Push an element onto the stack>

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| element | `T` |  Element to push onto the stack |

**Returns:** `void`

___
<a id="toarray"></a>

###  toArray

▸ **toArray**(): `T`[]

*Defined in [finite-stack.ts:76](https://github.com/strong-roots-capital/finite-stack/blob/e99190c/src/finite-stack.ts#L76)*

Return stack contents as an array, with most-recently pushed elements first.

**Returns:** `T`[]
Stack contents as an array

___

