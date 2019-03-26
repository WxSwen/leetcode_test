// if(!Function.prototype.bind) {
//   Function.prototype.bind = function(oThis) {
//     if(typeof this !== 'function') {
//       throw new TypeError('error');
//     }
//     var fToBind = this,
//       fNOP    = function() {},
//       fBound  = function() {
//         return fToBind.apply(this instanceof fBound
//                ? this
//                : oThis,
//                ...[...arguments].slice(1)       
//           )
//       }
    
//     if(this.prototype) {
//       fNOP.prototype = this.prototype;
//     }

//     fBound.prototype = new fNOP();

//     return fBound;
//   }
// }

// function instance_of(L, R) {//L 表示左表达式，R 表示右表达式
//   var O = R.prototype;// 取 R 的显示原型
//   L = L.__proto__;// 取 L 的隐式原型
//   while (true) { 
//     if (L === null) 
//       return false; 
//     if (O === L)// 这里重点：当 O 严格等于 L 时，返回 true 
//       return true; 
//     L = L.__proto__; 
//   } 
// }
// https://www.ibm.com/developerworks/cn/web/1306_jiangjj_jsinstanceof/index.html


Function.prototype.bind3 = function(oThis, ...args) {
  let fToBind = this;
  let fNOP = function() {};
  // let fBound  = function() {
  //       return fToBind.apply(this instanceof fBound
  //              ? this
  //              : oThis,
  //              ...[...arguments].slice(1)       
  //         )
  //     }
  let fBound = function(...innerArgs) {
    return fToBind.call( new.target 
            ? this 
            : oThis,
            ...args, ...innerArgs
        );
  }
  if(this.prototype) {
    fNOP.prototype = this.prototype;
  }

  fBound.prototype = new fNOP();

  return fBound;
};

// Function.prototype.bind2 = function (context) {

//   var self = this;
//   // 获取bind2函数从第二个参数到最后一个参数
//   var args = Array.prototype.slice.call(arguments, 1);

//   return function () {
//       // 这个时候的arguments是指bind返回的函数传入的参数
//       var bindArgs = Array.prototype.slice.call(arguments);
//       self.apply(context, args.concat(bindArgs));
//   }

// }

// var value = 2;

// var foo = {
//     value: 1
// };

// function bar(name, age) {
//     this.habit = 'shopping';
//     console.log(this.value);
//     console.log(name);
//     console.log(age);
// }

// bar.prototype.friend = 'kevin';

// var bindFoo = bar.bind(foo, 'daisy');

// var obj = new bindFoo('18');

// console.log(obj.habit);
// console.log(obj.friend);

let foo = {
  name: 'bind'
};
function callSth(age, sex) {
  console.log(this.name);
  console.log(age);
  console.log(sex);
  console.log(this.grade);
}
callSth.prototype.grade = 11;

let bindsFun = callSth.bind3(foo);

let callFun = new bindsFun(1, 'male');


// const add = x => x + 1;
// const multiply = (x, y) => x * y;
// const multiplyAdd = compose(multiply, add);
// console.log(multiplyAdd(3, 4))  // 返回 13

// function compose(...funcs) {
//   if (funcs.length === 0) {
//     return arg => arg
//   }

//   if (funcs.length === 1) {
//     return funcs[0]
//   }

//   return funcs.reduceRight((a, b) => (...args) => a(b(...args)))
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


// 1. function transformToNumber(str) {
//   let total = 0;
//   str.match(/[A-Z]/g).forEach(el => total += el.charCodeAt() - 64 );
//   return total;
// }
// function transformToNumber(str) {
//   if(!str.length) return 0;
//   return str.match(/[A-Z]/g).reduce((total, next) => { return total + (next.charCodeAt() - 64) }, 0);
// }
// console.log(transformToNumber('ABCDE'));

// 3.
// function findTheMostLongArray(arr) {
//   let max = [];
//   let temp = [];
//   let last = 0;
//   arr.reduce((left, right, index) => {
//     if(left >= right) {
//       temp = arr.slice(last, index);
//       last = index;
//       max = max.length > temp.length ? max : temp;
//     }
//     return left = right;
//   });
//   return max;
// }

// console.log(findTheMostLongArray([1,9,2,5,7,3,4,6,8,0, -1]));

// 4.
function getMidNodeLink(node) {
  let fast = node.next;
  let slow = node;
  if(!slow || !fast) {
    return node;
  }

  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

// var b = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: {
//           val: 5,
//           next: {
//             val: 6,
//             next: {
//               val: 7,
//               next: {
//                 val: 8,
//                 next: null
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

// console.log(getMidNodeLink(b));

// 6.
// function reverseArray(arr) {
//   let len = arr.length;
//   for(let i = 0; i < len >> 1; i++) {
//     [arr[i], arr[len - i - 1]] = [arr[len - i - 1], arr[i]]
//   }
//   return arr;
// }
// console.log(reverseArray([1,2,3,4,5,6,7]));

// 5.
// function findChildLink(l1, l2) {
//   let child = [];
//   while(l1 && l2) {
//     if(l1.val === l2.val) {
//       child.push(l1.val);
//       l1 = l1.next;
//       l2 = l2.next;
//     } else if(l1.val > l2.val) {
//       l2 = l2.next;
//     } else {
//       l1 = l1.next;
//     }
//   }
//   return child;
// }

// var l1 = {
//   val: '1',
//   next: {
//     val: '2',
//     next: {
//       val: '3',
//       next: null
//     }
//   }
// };
// var l2 = {
//   val: '1',
//   next: {
//     val: '3',
//     next: {
//       val: '4',
//       next: null
//     }
//   }
// }

// console.log(findChildLink(l1, l2));


// 2. dfs


// public static int KthSmallest(TreeNode root, int k)
//   {
//       Stack<TreeNode> s = new Stack<TreeNode>();
//       TreeNode p = root;
//       while (s.Count > 0 || p != null)
//       {
//           if (p != null)
//           {
//               s.Push(p);
//               p = p.Left;
//           }
//           else
//           {
//               p = s.Pop();
//               --k;
//               if (k == 0)
//               {
//                   return p.value;
//               }
//               p = p.Right;
//           }
//       }
//       return -1;
//   }
// function findKthBinaryTree (root, k) {
//   let s = [];
//   let p = root;
//   while(s.length > 0 || p != null) {
//     if(p !== null) {
//       s.push(p);
//       p = p.right;
//     } else {
//       p = s.pop();
//       k--;
//       if( k === 0) {
//         return p.val;
//       }
//       p = p.left;
//     }
//   }
//   return null;
// }

// var l = {
//   val: 6,
//   left: {
//     val: 2,
//     left: {
//       val: 0,
//       left: null,
//       right: null
//     },
//     right: {
//       val: 4,
//       left: {
//         val: 3,
//         left: null,
//         right: null
//       },
//       right: {
//         val: 5,
//         left: null,
//         right: null
//       }
//     }
//   },
//   right: {
//     val: 8,
//     left: {
//       val: 7,
//       left: null,
//       right: null
//     },
//     right: {
//       val: 9,
//       left: null,
//       right: null
//     }
//   }
// }


// console.log(findKthBinaryTree(l, 4));


// 给定一个数据流，数据流长度N很大，且N直到处理完所有数据之前都不可知，
// 请问如何在只遍历一遍数据（O(N)）的情况下，能够随机选取出m个不重复的数据。

// var reservoir = Array[m];

// for(var i = 0; i < reservoir.length; i++) {
//   reservoir[i] = dataStream[i];
// }

// for(var i = m; i < dataStream.length; i++) {
//   let d = Math.floor(Math.random(0, i) * i);
//   if(d < m) {
//     reservoir[d] = dataStream[i];
//   }
// }

// let foo = {
//   name: 'bind'
// };
// function callName() {
//   console.log(this.name);
// };

// function createBind(oThis) {
//   let self = this;
//    return function() {
//      self.call(oThis);
//   }
// }
// Function.prototype.bind = createBind;

// let bindsFun = callName.bind(foo);
// bindsFun()


// let foo = {
//   name: 'bind'
// };
// function callName(age, sex) {
//   console.log(this.name);
//   console.log(age);
//   console.log(sex);
// }
// function createBind(oThis, ...outArg) {
//   let self = this;
//   return function(...innArg) {
//      self.call(oThis, ...outArg, ...innArg);
//   }
// }
// Function.prototype.bind = createBind;
// let bindsFun = callName.bind(foo, 12);
// bindsFun('male')


// let foo = {
//   name: 'bind'
// };
// function callSth(age, sex) {
//   console.log(this.name);
//   console.log(age);
//   console.log(sex);
//   console.log(this.grade);
// }
// callSth.prototype.grade = 11;

// let bindsFun = callSth.bind(foo);

// let callFun = new bindsFun(1, 'male');

// callFun;