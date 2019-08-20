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

// 广度优先
// function bfs(root) {
//   let q = [];
//   let p = [];
//   let cur = null;
//   q.push(root);
//   while(q.length) {
//     cur = q.shift();
//     p.push(cur.val);
//     cur.left && q.push(cur.left);
//     cur.right && q.push(cur.right);
//   }
//   return p;
// }

// 深度优先
// function dfs(root) {
//   let q = [];
//   let p = [];
//   let cur = null;
//   q.push(root);
//   while(q.length) {
//     cur = q.pop();
//     p.push(cur.val);
//     cur.right && q.push(cur.right);
//     cur.left && q.push(cur.left);
//   }
//   return p;
// }

// 前序(递归)
// function dlr(root, s = []) {
//   s.push(root.val);
//   root.left && dlr(root.left, s);
//   root.right && dlr(root.right, s);
//   return s;
// }

// 中序(递归)
// function ldr(root, s = []) {
//   root.left && ldr(root.left, s);
//   s.push(root.val);
//   root.right && ldr(root.right, s);
//   return s;
// }

// 后序
// function lrd(root, s = []) {
//   root.left && lrd(root.left, s);
//   root.right && lrd(root.right, s);
//   s.push(root.val);
//   return s;
// }


// function searchKth(root, count) {
//   let s = [];
//   let q = [];
//   let p = root;

//   while(s.length > 0 || p !== null) {
//     if(p !== null) {
//       s.push(p);
//       p = p.left;
//     } else {
//       p = s.pop();
//       q.push(p.val);
//       p = p.right;
//     }
//   }
//   return q;
// }
// console.log(searchKth(a));

