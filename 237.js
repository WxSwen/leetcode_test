/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 这道leetcode，意思是将当前节点换成next节点？
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};