// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// function converToTree(data) {
//   let res = {};

//   for (let i = 0; i < data.length; i++) {
//     recurse(data[i], res);
//   }

//   return res;
// }
// function recurse(item, res) {
//   let { id, parentId, label } = item;
//   if (!parentId) {
//     res.id = id;
//     res.label = label;
//     res.children = [];
//   } else {
//     if (parentId === res.id) {
//       if (!res.children) res.children = [];
//       res.children.push({
//         id,
//         label,
//       });
//     } else if (res.children) {
//       for (let i = 0; i < res.children.length; i++) {
//         recurse(item, res.children[i]);
//       }
//     }
//   }
// }

// console.dir(
//   converToTree([
//     { id: 1, parentId: null, label: 1 },
//     { id: 2, parentId: 1, label: 2 },
//     { id: 3, parentId: 2, label: 3 },
//     { id: 4, parentId: 1, label: 4 },
//     { id: 5, parentId: 4, label: 5 },
//     { id: 6, parentId: 1, label: 6 },
//     { id: 7, parentId: 6, label: 7 },
//     { id: 8, parentId: 7, label: 8 },
//     { id: 9, parentId: 8, label: 9 },
//   ])
// );

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var findNumberIn2DArray = function (matrix, target) {
//   let rows = 0;
//   let column = matrix.length - 1;

//   while (column >= 0 && rows <= matrix[0].length - 1) {
//     if (matrix[column][rows] > target) {
//       column--;
//     } else if (matrix[column][rows] < target) {
//       rows++;
//     } else {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(findNumberIn2DArray([[-5]], -5));


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//  var findNumberIn2DArray = function(matrix, target) {
//   let row = matrix.length - 1;
//   let column = 0;

//   if (!matrix.length) return false;

//   while(column < matrix[0].length && row >= 0) {
//     if (matrix[row][column] > target) {
//       row--;
//     } else if (matrix[row][column] < target) {
//       column++
//     } else {
//       return true;
//     }
//   };
//   return false;
// };

// console.error(findNumberIn2DArray([[5]], 5));


// function shuffle(arr) {
//   let recordArr = [];
//   function getRandom() {
//     const random = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
//     recordArr = recordArr.concat([random]);
//     return random;
//   }
//   return (n = 1) => {
//     const res = [];
//     for (let i = 0; i < n; i++) {
//       if (arr.length === 0) {
//         arr = recordArr.filter((item) => !res.some((val) => item === val));
//       }
//       res.push(getRandom());
//     }
//     return res;
//   };
// }
// console.error(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])());


// class LazyMachine {
//   constructor(name) {
//     this.name = name;
//     this.task = [];
//     console.log('Hi I am', name, 'Machine');
//     setTimeout(() => {
//       this.next();
//     }, 0);
//   }
//   produce(str) {
//     this.task.push(() => {
//       console.log('I am producing', str);
//       this.next();
//     });
//     return this;
//   }
//   delay(n) {
//     this.task.push(() => {
//       setTimeout(() => {
//         console.log('等待了' + n + 's');
//         this.next();
//       }, n * 1000);
//     });
//     return this;
//   }
//   delayFirst(n) {
//     this.task.unshift(() => {
//       setTimeout(() => {
//         console.log('等待了' + n + 's');
//         this.next();
//       }, n * 1000);
//     });
//     return this;
//   }
//   next() {
//     let fn = this.task.shift();
//     fn && fn();
//   }
// }


// function concatArguments(fn) {
//   let args = []
//   return function next(...arr) {
//     args = [...args, ...arr]
//     if (arr.length === 0) {
//       return fn(...args)
//     }
//     return next
//   }
// }

// const minus = concatArguments(function (...arr) {
//   return arr.reduce((total, item) => {
//     return total - item
//   }, 0)
// })


function minus() {
  let arr1 = [...arguments];
  let result = arr1.reduce(function (pre, cur) {
    return pre -= cur;
  }, 0)
  return function () {
    let arr2 = [...arguments];
    let result2 = arr2.reduce(function (pre, cur) {
      return pre -= cur;
    }, result)
  }
}

// minus() // return 0
// minus(1)() // return -1
// minus(1, 2)() // return -3
// minus(1)(2)() // return -3
// minus(1, 2)(3)() // return -6
// minus(1, 2)(3)(4)() // return -10
// minus(1, 2)(3)(4); // 可不断添加括号，一直减下去
