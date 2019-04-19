import { Stack } from '../src/finite-stack'

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
