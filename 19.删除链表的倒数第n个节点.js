/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let fast = head;
  let slow = head;

  while (n) {
    fast = fast.next;
    n--;
  }
  if(!fast || fast.next === null) {
    head = head.next;
    return head;
  }

  while(fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  // 对象是单独地址的，所以改变单个对象会影响head
  slow.next = slow.next.next;
  return head;
};

