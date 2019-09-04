// 1. 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

function getCount(num) {
  let count = 0;

  while(num) {
    if (num & 1) {
      count++;
    }
    num >>= 1;
  }

  return count;
}

// function getCount(num) {
//   let count = 0;

//   while(num !== 0) {
//     num = num & (num - 1);
//     count++;
//   }
//   return count;
// }

console.log(getCount(5));

