/**
 * finite-stack
 * LIFO stack with finite history
 */

import ow from 'ow'
import { LinkedList } from 'linked-list-typescript'
import { AccessError } from './internal/access-error'


/**
 * Generically-typed stack with finite length.
 */
export class Stack<T> {

    capacity: number
    list: LinkedList<T>;

    /**
     * Create a stack with specified capacity.
     *
     * @param capacity - Capacity of created stack
     */
    constructor(capacity: number = 2) {
        ow(capacity, ow.number.is(
            x => x >= 0 || `Expected capacity to be at least 0 (got '${capacity}')`
        ))

        this.capacity = capacity
        this.list = new LinkedList()
    }

    /**
     * Return quantity of elements in stack.
     *
     * @returns Number of elements in stack
     */
    get size() {
        return this.list.length
    }

    /**
     * Push an element onto the stack>
     *
     * @param element - Element to push onto the stack
     */
    push(element: T) {
        this.list.prepend(element)
        if (this.list.length > this.capacity) {
            this.list.removeTail()
        }
    }

    /**
     * Returns the most-recently pushed element in the stack.
     *
     * @returns Most recently-pushed element in stack
     */
    peek(): T {
        if (this.isEmpty()) {
            throw new AccessError('Attempted to peek at empty list', this.peek)
        }
        return this.list.head
    }

    /**
     * Test if the stack contains no elements.
     *
     * @returns True if stack has had no elements pushed
     */
    isEmpty(): boolean {
        return this.list.length === 0
    }

    /**
     * Return stack contents as an array, with most-recently pushed
     * elements first.
     *
     * @returns Stack contents as an array
     */
    toArray(): T[] {
        return this.list.toArray()
    }
}
