import Node from "./node.mjs"

export default class linkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    size() {
        let counter = 0
        let current = this.head
        while (current) {
            counter++
            current = current.next
        }
        return counter
    }

    head() {
        return this.head
    }

    tail() {
        let current = this.head
        while (current.next) {
            current = current.next
        }
        return current
    }

    at(index) {
        let counter = 0
        let current = this.head
        while (current) {
            if (counter === index) {
                return current
            }
            counter++
            current = current.next
        }
    }

    pop() {
        if (!this.head) {
            return null
        }

        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        current.next = null
    }


    //contains
    contains() {
        let current = this.head
        while (current) {
            if (current.data === value) {
                return true
            }
            current = current.next
        }
        return false
    }

    find(value) {
        let current = this.head
        while (current) {
            if (current.data === value) {
                return current
            }
            current = current.next
        }
        return null
    }

    toString() {
        let str = ""
        let current = this.head
        while (current) {
            str += `${current.data} --> `
            current = current.next
        }
        str += "NULL"
        console.log(result)
        return str
    }

}