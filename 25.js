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
// var reverseKGroup = function(head, k) {
//     if(!head || !head.next) return head;
//     var l = head.next, next, first = head;

//     while(k - 1 && l.next) {
//       next = l.next;
//       l.next = head;
//       head = l;
//       l = next;
//       k--;

//       if(k === 1) {
//         first.next = next;
//       }
//     }
//     return head;
// };

var reverseKGroup = function(head, k) {
    if(!head) return null;
    if(!head.next) return head;
    var l = head.next, next, i = k, cur = head, first = head;
    
    // 先判断是否有足够的长度，没有直接返回head
    for(let j = 1; j < k; j++) {
      cur = cur.next;
      if(cur === null) return head;
      if(cur && k - j === 1) {
        while(k - 1 && l) {
          next = l.next;
          l.next = head;
          head = l;
          l = next;
          k--;
          if(k === 1) {
            first.next = reverseKGroup(next, i);
            break;
          }
        }
      }
    }
    return head;
};

var a = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

console.log(reverseKGroup(a, 3));