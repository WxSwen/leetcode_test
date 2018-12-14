/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function(nums, k) {
//     let q = [], res = [];
//     for(let i = 0; i < nums.length; i++) {
//       while (q.length && nums[i] > q[q.length - 1]) {
//         q.pop();
//       }

//       q.push(nums[i]);

//       const startIndex = i - k + 1;

//       if(startIndex >= 0) {
//         res.push(q[0]);
//       }
//       if(nums[startIndex] === q[0]) q.shift();
//     }
//     return res;
// };

// const findMax = (arr) => {
//   let max = arr[0];
//   let index = 0;
//   for (let i = 1; i < arr.length; i += 1) {
//       if (arr[i] > max) {
//           max = arr[i];
//           index = i;
//       }
//   }
//   return {max: max, index: index};
// }
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) {
      return [];
  }
  // const queue = [nums[0]];
  const queue = [];
  const swm = [];
  let j = 0;
  for (let i =0; i < nums.length; i += 1) {
      while(nums[i] > queue[queue.length - 1]) {
          queue.pop();
      }
      queue.push(nums[i]);
      if ( i >= (k-1)) {
          swm.push(queue[0]);
          if(queue[0] === nums[j]) {
              queue.shift();   
          }
          j+= 1;
      }
      
  }
  return swm;
};
console.log(maxSlidingWindow([7, 2, 4, 4, 4], 3));