// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


// var addTwoNumbers = function(l1, l2) {
//   return recurse(l1, l2, 0);
// }
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// function recurse(l1, l2, c) {
//   if (!l1 && !l2) return c ? new ListNode(c) : null;
//   let s = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
//   let r = new ListNode((s + c) % 10);
//   r.next = recurse(l1 ? l1.next : null, l2 ? l2.next : null, Math.floor((s + c) / 10));
//   return r;
// }
// console.log(addTwoNumbers([2,4,3], [5,6,4]));


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
var addTwoNumbers = function(l1, l2) {
    return recurse(l1, l2);
};

function recurse(l1,l2,carry) {
  if(!l1 && !l2 && !carry) {
    return null;
  }
  l1 = l1 || new ListNode(0);
  l2 = l2 || new ListNode(0);
  carry = carry || 0;

  let l3 = new ListNode((l1.val + l2.val + carry) % 10)
  carry = parseInt((l1.val + l2.val + carry) / 10);

  if(l1.next || l2.next || carry){
    l3.next = recurse(l1.next, l2.next, carry);
  }
  return l3;
}