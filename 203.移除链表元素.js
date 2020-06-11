/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 1. 循环
// 2. 添加头节点
// 3. 递归
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head === null) return null;

  head.next = removeElements(head.next, val);

  if (head.val === val) {
    head = head.next;
  }
  return head;
};
// @lc code=end
