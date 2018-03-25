var addTwoNumbers = function(l1, l2) {
  return recurse(l1, l2, 0);
}
function ListNode(val) {
    this.val = val;
    this.next = null;
}
function recurse(l1, l2, c) {
  if (!l1 && !l2) return c ? new ListNode(c) : null;
  let s = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
  let r = new ListNode((s + c) % 10);
  r.next = recurse(l1 ? l1.next : null, l2 ? l2.next : null, Math.floor((s + c) / 10));
  return r;
}
console.log(addTwoNumbers([2,4,3], [5,6,4]));
