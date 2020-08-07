/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  let vec = [];
  if (k === 0) return vec;
  let Q = [];
  for (let i = 0; i < k; i++) Q.push(arr[i]);
  for (let i = k; i < arr.length; i++) {
    if (Q[k - 1] > arr[i]) {
      Q.pop();
      Q.push(arr[i]);
    }
  }
  for (let i = 0; i < k; i++) {
    vec[i] = Q[Q.length - 1];
    Q.pop();
  }
  return vec;
};

console.log(getLeastNumbers([0, 1, 2, 1], 1));
