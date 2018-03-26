/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
};

var vLen = 2*numRows-2;//每个V的元素个数
var numV = s.length()/vLen;//V的个数
  if(s.length()%vLen!=0){
      numV=numV+1;
  }