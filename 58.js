/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(!s.length) return 0;
    var arr = s.split(/\s+/);
    return arr[arr.length - 1].length ? arr[arr.length - 1].length : arr[arr.length - 2].length;
};