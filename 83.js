/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head, next) {
  var isPass = false;
  if(!head) return head;
  
  while(!isPass){
    if(head.next && head.next.val === head.val) {
      head.next = head.next.next; 
    } else {
      isPass = true;
    }
  }
  head.next = deleteDuplicates(head.next);

  return head;
};

var a = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null
        }
      }
    }
  }
}

console.log(deleteDuplicates(a));