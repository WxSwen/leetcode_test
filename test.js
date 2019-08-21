// function quicksort(arr, left, right) {
//   let i = left;
//   let j = right;
//   let temp = arr[left];
//   if(left > right) {
//     return arr;
//   }
//   while(i !== j) {
//     while( j > i && arr[j] >= temp) {
//       j--;
//     }
//     while( j > i && arr[i] <= temp) {
//       i++;
//     }
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   [arr[left], arr[i]] = [arr[i], arr[left]];

//   quicksort(arr, left, i - 1);
//   quicksort(arr, i + 1, right);
// }

// var arr = [2,3,4,1,5,6]
// quicksort(arr, 0, 5);
// console.log(arr)


// 1. 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
// function getCount(num) {
//   let count = 0;

//   while(num !== 0) {
//     num = num & (num - 1);
//     count++;
//   }
//   return count;
// }
// console.log(getCount(2));

// 2、判断二进制中0的个数
// 按位与对比最后一位，右移
// function getCount(n) { 
//   let count = 0;
//   while(n !== 0) {
//     if((n & 1) !== 1) {
//       count++;
//     }
//     n = n >> 1;
//   }
//   return count;
// }

// console.log(getCount(2));


// 二、二叉树
// 1、二叉搜索树第k个结点
// 给定一颗二叉搜索树，请找出其中的第k小的结点
// var a = {
//   val: 8,
//   left: {
//     val: 3,
//     left: {
//       val: 1,
//       left: null,
//       right: null
//     },
//     right: {
//       val: 6,
//       left: {
//         val: 4,
//         left: null,
//         right: null
//       },
//       right: {
//         val: 7,
//         left: null,
//         right: null
//       }
//     }
//   },
//   right: {
//     val: 10,
//     left: null,
//     right: {
//       val: 14,
//       left: {
//         val: 13,
//         left: null,
//         right: null
//       },
//       right: null
//     }
//   }
// }


// function getKNodeBTree(root, k) {
//   let s = [];
//   let p = root;
//   while(s.length > 0 || p != null) {
//     if(p !== null) {
//       s.push(p);
//       p = p.left;
//     } else {
//       p = s.pop();
//       k--;
//       if( k === 0) {
//         return p.val;
//       }
//       p = p.right;
//     }
//   }
//   return null;
// }

// console.log(getKNodeBTree(a, 5));

// 2.0 从上往下打印二叉树

// function printTree(root) {
//   if(!root) return null;
//   let s = [root];
//   let cur = null;
//   let f = [];
//   while(s.length) {
//     cur = s.shift();
//     f.push(cur.val);
//     cur.left && s.push(cur.left);
//     cur.right && s.push(cur.right);
//     console.log(s.length);
//   }
//   return f;
// }

// console.log(printTree(a));

// 2.1二叉树打印成多行

// function printTree(root) {
//   if(!root) return null;
//   let s = [{ node: root, l: 0 }];
//   let cur = null;
//   let f = [];
//   while(s.length) {
//     cur = s.shift();
    
//     f[cur.l] = f[cur.l] || [];
//     f[cur.l].push(cur.node.val);
//     cur.node.left && s.push({ node: cur.node.left, l: cur.l + 1 });
//     cur.node.right && s.push({ node: cur.node.right, l: cur.l + 1 });
//   }
//   return f;
// }

// console.log(printTree(a));

// function verifyBTree(array, start, end) {
//   if(start >= end) return true;
//   let root = array[end];
//   let i = start;
//   while(array[i] < root) {
//     i++;
//   }
//   let j = i;
//   while(j < end) {
//     if(array[j] < root) return false;
//     j++;
//   }
//   let left = verifyBTree(array, start, i - 1);
//   let right = verifyBTree(array, i, end - 1);
//   return left && right;
// }

// console.log(verifyBTree([4,8,6,12,16,14,10], 0, 6));

// 10、二叉树的深度
// function treeDepth (root) {
//   if(!root) return 0;
//   let left = treeDepth(root.left);
//   let right = treeDepth(root.right);

//   return left > right ? left + 1 : right + 1;
// }
// console.log(treeDepth(a));

// 11、平衡二叉树
// function IsBalance(root) {
//   return reverse(root);
// }

// function reverse(root) {
//   if(!root) return 0;

//   let left  = reverse(root.left);
//   let right = reverse(root.right);

//   if(Math.abs(left - right) > 1) {
//     return false;
//   }
//   return Math.max(left, right) + 1;
// }

// console.log(IsBalance(a));

// function Find(target, array) {
//     // write code here
//     let len = array[0].length;
//     let column = 0;
//     let row = len - 1;

//     if(array.length > 0) {
//       while(row >= 0 && column < array.length) {
//         if(target === array[column][row]) {
//           return true;
//         } else if(target > array[column][row]) {
//           column++;
//         } else {
//           row--;
//         }
//       }
//     }
//     return false;
// }



// function Find(target, array) {
//   // write code here
//   lenX = array.length;
//   lenY = array[0].length;
//   for (var i = lenX - 1, j = 0; i >= 0 && j < lenY;) {
//       if (target > array[i][j]) {
//           j++;
//       }
//       else if (target < array[i][j]) {
//           i--;
//       }
//       else {
//           return true;
//       }
//   }
//   return false
// }

// function Find(target, array) {
//   let reg = new RegExp(`(^|,)${target}($|,)`);
//   return reg.test(array.toString())
// }

// console.log(Find(7,[[1,2,8,9],[4,7,10,13]]));

// function balanceTree(root) {
//   if(!root) return 0;

//   let left = balanceTree(root.left);
//   let right = balanceTree(root.right);
//   if(Math.abs(left - right) > 1) {
//     return false;
//   } else {
//     return Math.max(left, right) + 1;
//   }
// }

// var a = {
//   val: 8,
//   left: {
//     val: 3,
//     left: {
//       val: 1,
//       left: null,
//       right: null
//     },
//     right: {
//       val: 6,
//       left: {
//         val: 4,
//         left: null,
//         right: null
//       },
//       right: {
//         val: 7,
//         left: null,
//         right: null
//       }
//     }
//   },
//   right: {
//     val: 10,
//     left: null,
//     right: {
//       val: 14,
//       left: {
//         val: 13,
//         left: null,
//         right: null
//       },
//       right: null
//     }
//   }
// }

// // 中序
// function ldr(root) {
//   let arr = [];
//   let rootArr = [];
//   rootArr.push(root);
//   while(rootArr.length) {
//     let p = rootArr[0];
//     if(p.left) {
//       rootArr.unshift(p.left);
//     }
//     p = rootArr.shift();
//     if(p.right) {
//       rootArr.push(p.right);
//     }
//     arr.push(p.val);
//   }
//   return arr;
// }



// function quicksort(arr, left, right) {
//   let i = left;
//   let j = right;
//   let temp = arr[left];
//   if(left > right) {
//     return arr;
//   }
//   while(i !== j) {
//     while( j > i && arr[j] >= temp) {
//       j--;
//     }
//     while( j > i && arr[i] <= temp) {
//       i++;
//     }
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   [arr[left], arr[i]] = [arr[i], arr[left]];

//   quicksort(arr, left, i - 1);
//   quicksort(arr, i + 1, right);
// }

// var arr = [2,3,4,1,5,6]
// quicksort(arr, 0, 5);
// console.log(arr)

// function quicksort(arr, left, right) {
//   let i = left;
//   let j = right;
//   let temp = arr[left];

//   if(left > right) return arr;

//   while(i !== j) {
//     while(i < j && arr[j] >= temp) {
//       j--;
//     }
//     while(i < j && arr[i] <= temp) {
//       i++;
//     }
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   [arr[left], arr[i]] = [arr[i], arr[left]];

//   console.log(i);
//   quicksort(arr, left, i - 1);
//   quicksort(arr, i + 1, right);
// }

// quicksort(arr, 0, 6);
// console.log(arr)


// function binarySearch(arr, num, left, right) {
//   let mid = (left + right) >> 1;
//   if(left > right) return -1;
//   if(arr[mid] === num) {
//     return mid;
//   } else if(arr[mid] > num) {
//     return binarySearch(arr, num, left, mid - 1);
//   } else {
//     return binarySearch(arr, num, mid + 1, right);
//   }
// }

// var arr = [2, 3, 8, 9, 10, 11, 25, 87];
// console.log(binarySearch(arr, 7, 0, arr.length - 1));


// console.log('start');

// setTimeout(() => {          // callback1
//   console.log(111);
//   setTimeout(() => {        // callback2
//     console.log(222);
//   }, 0);
//   setImmediate(() => {      // callback3
//     console.log(333);
//   })
//   process.nextTick(() => {  // callback4
//     console.log(444);  
//   })
// }, 0);

// setImmediate(() => {        // callback5
//   console.log(555);
//   process.nextTick(() => {  // callback6
//     console.log(666);  
//   })
// })

// setTimeout(() => {          // callback7              
//   console.log(777);
//   process.nextTick(() => {  // callback8
//     console.log(888);   
//   })
// }, 0);

// process.nextTick(() => {    // callback9
//   console.log(999);  
// })

// console.log('end');

// start end 999 111 444 777 888 555 666 333 222


var lengthOfLongestSubstring = function(s) {
  let maxLength = 0;
  let str = s[0];

  for(var i = 1; i < s.length; i++){
    let subIndex = str.indexOf(s[i]);
    if(subIndex === -1){
      str += s[i];
    } else {
      maxLength = maxLength > str.length ? maxLength : str.length;
      str = str.substring(subIndex + 1) + s[i];
    }
  }
  return maxLength > str.length ? maxLength : str.length;
};

console.log(lengthOfLongestSubstring('pwwke'));