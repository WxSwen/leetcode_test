/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var max = 0;
    var _max = 0;
    var obj = {
      '(':')'
    };
    var stack = [];

    for(var i of s){
      if(obj[i]) {
        stack.push(i);
      } else {
        if(obj[stack.pop()] === i) {
          _max += 2;
          continue;
        } else {
          _max = _max - 2 * stack.length;
          stack = [];
          max = max > _max ? max : _max;
          _max = 0;
        }
      }
    }
    _max = _max - 2 * stack.length;
    return max > _max ? max : _max;
};

console.log(longestValidParentheses('(()'));