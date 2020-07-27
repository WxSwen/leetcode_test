/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let _head = head;
  let _tail = head;

  while (k) {
    _tail = _tail.next;
    k--;
  }
  while (_tail) {
    _head = _head.next;
    _tail = _tail.next;
  }
  return _head;
};
