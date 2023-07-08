class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// A -> B -> C -> D -> NULL

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b
b.next = c
c.next = d


// const reverseList = (head) => {
//     let prev = null
//     let current = head

//     while (current !== null) {
//         const next = current.next
        
//         current.next = prev
//         prev = current
//         current = next
//     }

//     return prev.val
// }

const reverseList = (head, prev = null) => {
    if (head === null) return prev.val
    const next = head.next
    head.next = prev
    return reverseList(next, head)
}

console.log(reverseList(a))