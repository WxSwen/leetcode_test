/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 0;
    var i = digits.length - 1;

    while(i >= 0){

      if(i === digits.length - 1) {
        digits[i]++; 
      } else {
        digits[i] += carry;
        carry = 0;
      }
      
      if(digits[i] === 10) {
        carry = 1;
        digits[i] = 0;
      } else {
        break;
      }

      i--;
    }
    return digits[0] === 0 ? [1].concat(digits) : digits;
};
console.log(plusOne([2,4,9,3,9]));