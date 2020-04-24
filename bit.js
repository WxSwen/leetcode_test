// 找出唯一存在的数
//   000000001
// ^ 000000011
// = 000000010
function findNumber(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[0] ^= arr[i];
  }
  return arr[0];
}
// console.log(findNumber([1, 2, 3, 4, 7, 3, 2, 1, 4]));

// repeat重复字符串
function repeat(str, count) {
  let rpt = "";

  for (;;) {
    if ((count & 1) === 1) {
      rpt += str;
    }
    count >>>= 1;
    if (count === 0) {
      break;
    }
    str += str;
  }
  return rpt;
}
// console.log(repeat("123", 3));
