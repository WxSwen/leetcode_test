// Example 1:

//  Input: 123
//  Output:  321
// Example 2:

//  Input: -123
//  Output: -321
// Example 3:

//  Input: 120
//  Output: 21

var reverse = function(x) {
  
  // 1.let str = String(x);

  // let num = str.split('').reverse().join('');
  
  // let returnNum =  /\-/.test(num) ? ~parseInt(num) : parseInt(num);
  // return Math.abs(returnNum) > Math.pow(2, 31) - 1 ? 0 : returnNum;


  var MAX = Math.pow(2, 31) - 1;
  var number = 0, symbol = 1;

  if(x < 0){
    x = Math.abs(x);
    symbol = -1;
  }

  while(x > 0){
    number = number * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  
  return number > MAX ? false : symbol * number;
  
};
console.log(reverse(-2147));