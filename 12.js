// Example 1:

// Input: 3
// Output: "III"
// Example 2:

// Input: 4
// Output: "IV"
// Example 3:

// Input: 9
// Output: "IX"
// Example 4:

// Input: 58
// Output: "LVIII"
// Explanation: C = 100, L = 50, XXX = 30 and III = 3.
// Example 5:

// Input: 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var M = ["", "M", "MM", "MMM"];
    var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return M[parseInt(num / 1000)] + C[parseInt((num % 1000) / 100)] + X[parseInt((num % 100) / 10)] + I[num % 10];
};