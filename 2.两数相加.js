/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
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

var recurse = function(l1, l2, carry) {
  if (!l1 && !l2 && !carry) return null;

  l1 = l1 || new ListNode(0);
  l2 = l2 || new ListNode(0);
  carry = carry || 0;

  let l3 = new ListNode((l1.val + l2.val + carry) % 10);

  carry = parseInt((l1.val + l2.val + carry) / 10);

  if(l1.next || l2.next || carry) {
    l3.next = recurse(l1.next, l2.next, carry);
  }

  return l3;
}

