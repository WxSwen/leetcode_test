let printTree = (root) => {
  let s = [];
  let arr = [root];
  let p = null;

  while (arr.length) {
    p = arr.shift();
    s.push(p.val);
    p.left && arr.push(p.left);
    p.right && arr.push(p.right);
  }
  return s;
}

var a = {
  val: 8,
  left: {
    val: 3,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 6,
      left: {
        val: 4,
        left: null,
        right: null
      },
      right: {
        val: 7,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 10,
    left: null,
    right: {
      val: 14,
      left: {
        val: 13,
        left: null,
        right: null
      },
      right: null
    }
  }
}

console.log(printTree(a));