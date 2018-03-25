/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length <= 1) return false;
    
    var o = Object.create(null);
    var obj = Object.assign(o, {
      '(':')',
      '{':'}',
      '[':']'
    });

    var stack = [];
    for(var i of s){
      if(obj[i]) {
        stack.push(i);
      } else {
        if(obj[stack.pop()] === i) {
          continue;
        } else {
          return false
        }
      }
    }
    return stack.length === 0;
};

console.log(isValid('()[]{}'));