import * as Stack from '../src/finite-stack'

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
