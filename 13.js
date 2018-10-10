// Example 1:

// Input: "III"
// Output: 3
// Example 2:

// Input: "IV"
// Output: 4
// Example 3:

// Input: "IX"
// Output: 9
// Example 4:

// Input: "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:

// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var romans = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  var arr1 = s.split(''), arr2 = [], pre = 0, sum = 0;
  
  for(var i = 0; i < arr1.length; i++) {
    arr2.push(romans[arr1[i]]);
  };
  for(var j = arr2.length - 1; j >= 0; j--) {
    if(pre > arr2[j]) {
      sum -= arr2[j]
    } else {
      sum += arr2[j]
      pre = arr2[j];
    }
  }
  return sum;
};

console.log(romanToInt("III"));