// 2、判断二进制中0的个数

function getCount(n) {
  let count = 0; 
  while (n) {
    if ((n & 1) === 0) {
      count++;
    }
    n >>= 1;
  }
  return count;
}
console.log(getCount(2));