/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // it mast be a below 32-bit number

  // var sum = parseInt(a) + parseInt(b);
  // var carry = 0;
  // var str = '';

  // if(!sum) return '0';

  // while(sum) {
  //   last = (sum + carry) % 10;
  //   sum = parseInt(sum / 10);
  //   carry = last >= 2 ? 1 : 0;
  //   str = last % 2 + str;
  // }

  // return carry ? 1 + str : str;

  var longStr, shortStr;
  var len = a.length - b.length;
  var i,
    carry = 0,
    str = "";

  if (len >= 0) {
    longStr = a;
    shortStr = b;
  } else {
    longStr = b;
    shortStr = a;
  }

  i = longStr.length - 1;

  len = Math.abs(len);

  while (i >= 0) {
    var last =
      parseInt(longStr[i]) +
      carry +
      parseInt(shortStr[i - len] ? shortStr[i - len] : 0);

    carry = last >= 2 ? 1 : 0;
    str = (last % 2) + str;
    i--;
  }
  return carry ? 1 + str : str;
};

console.log(addBinary("1", "101"));
