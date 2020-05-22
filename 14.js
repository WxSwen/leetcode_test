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


//   if(strs.length === 0) return "";

//   let longPre = strs[0];

//   for(let i = strs.length - 1; i > 0 ; i--){
//     while(strs[i].indexOf(longPre) !== 0) {
//       longPre = longPre.substring(0, longPre.length - 1);
//       if (longPre.length === 0) return '';
//     }
//   }

//   return longPre;
// };
var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let min = 0,
    max = 0;

  for (let i = 0; i < strs.length; i++) {
    if (strs[min] > strs[i]) min = i;
    if (strs[max] < strs[i]) max = i;
  }

  for (let i = 0; i < strs[min].length; i++) {
    if (strs[min].charAt(i) !== strs[max].charAt(i))
      return strs[min].substr(0, i);
  }
};

  
console.log(longestCommonPrefix(['123244','12324','12324']));