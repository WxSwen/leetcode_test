function getKNodeBTree(root, k) {
  let count = 0;
  // function reverse (root) {
  //   if (!root) return;
    // 1. 递归中序遍历
    // 关键在于如何返回值
    // 节点遍历后返回null作为判断
    // let left = reverse(root.left);
    // if (left) {
    //   return left;
    // }
    // count += 1;
    // if (count === k) {
    //   return root.val;
    // }
    // let right = reverse(root.right);
    // if (right) {
    //   return right;
    // }
    // return null;

    // 2. 栈
    // 栈1
    // let p = null;
    // let arr = [root]; 
    // while (p || arr.length) {
    //   p = arr.shift();
    //   if (p) {
    //     if (k === 0) {
    //       return p.val;
    //     }
    //     k--;
    //     p.left && arr.push(p.left);
    //     p.right && arr.push(p.right);
    //   }
    // }


    // 错误：这种方式可以遍历所有节点，但无法中断节点的遍历
    // count += 1;
    // if (k === count) {
    //   return root.val;
    // }
    // if(root.left) {
    //   reverse(root.left);
    // }
    // if(root.right) {
    //   reverse(root.right);
    // }
  // }
  // return reverse(root);


  // 栈2
  let s = [];
  let p = root;
  while(s.length > 0 || p != null) {
    if(p !== null) {
      s.push(p);
      p = p.left;
    } else {
      p = s.pop();
      k--;
      if( k === 0) {
        return p.val;
      }
      p = p.right;
    }
  }
  return null;
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

console.log(getKNodeBTree(a, 4));