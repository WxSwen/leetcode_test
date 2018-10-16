// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length) return [];
    let letterMap = {
      '2': ['a','b','c'],
      '3': ['d','e','f'],
      '4': ['g','h','i'],
      '5': ['j','k','l'],
      '6': ['m','n','o'],
      '7': ['p','q','r','s'],
      '8': ['t','u','v'],
      '9': ['w','x','y','z'],
    };

    let arr_digi = digits.split('');
    let result = letterMap[arr_digi[0]];
    let i = 1;
    
    while(arr_digi.length !== i) {
      let pre = result;
      let aft = letterMap[arr_digi[i]];
      let mid = [];
      for(let i = 0; i < pre.length; i++) {
        for(let j = 0; j < aft.length; j++) {
          mid.push(`${pre[i]}${aft[j]}`);
        }
      }
      result = mid;
      i++;
    }
    return result;
};

console.log(letterCombinations("23"));