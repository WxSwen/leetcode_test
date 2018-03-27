/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var mergeTwoLists = function (l1, l2) {
    return recurse(l1, l2);
};

function recurse(l1, l2, node) {
    node = node || new ListNode();

    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } 
    

    if (l1.val <= l2.val) {
        node.val = l1.val;
        node.next = recurse(l1.next, l2);
    } else {
        node.val = l2.val;
        node.next = recurse(l1, l2.next);
    }
    return node;
}

var l1 = {
    val: '1',
    next: null
};
var l2 = {
    val: '1',
    next: null
}

console.log(mergeTwoLists(l1, l2));