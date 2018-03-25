/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 1.if(x < 0) return false;
    // if(parseInt(x) < x) return false;

    // let reverseX = String(x).split('').reverse().join('');
    // return 2 * x - x === parseInt(reverseX);

    // Runtime: 56 ms
    


    let INT_MAX = Math.pow(2, 31) - 1;
    if(x < 0 || x > INT_MAX) return false;

    let reverseNum = 0;
    let origin = x;
    while(x > 0){
        reverseNum = reverseNum * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return reverseNum === origin;
};

console.log(isPalindrome(1221))