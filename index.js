import Node from "./node.mjs"
import linkedList from "./linkedlist.mjs"

const ll = new linkedList()

ll.head = new Node(100)
ll.append(127)
ll.append("cat")
ll.append("dog")

console.log(ll.head)