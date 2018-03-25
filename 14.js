/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // if (strs === undefined || strs.length === 0) { return ''; }
  
  // return strs.reduce((prev, next) => {
  //     let i = 0;
  //     while (prev[i] && next[i] && prev[i] === next[i]) i++;
  //     return prev.slice(0, i);
  // });

  // 1.if( strs === undefined || strs.length == 0) return "";

  // return strs.reduce((prev, next) => {
  //   let i = 0;
  //   while(prev[i] && next[i] && prev[i] === next[i]) i++;
  //   return prev.slice(0, i);
  // })


  if(strs.length === 0) return "";

  let longPre = strs[0];

  for(let i = strs.length - 1; i > 0 ; i--){
    while(strs[i].indexOf(longPre) !== 0) {
      longPre = longPre.substring(0, longPre.length - 1);
      if (longPre.length === 0) return '';
    }
  }

  return longPre;
};

console.log(longestCommonPrefix(['123244','12324','12324']));