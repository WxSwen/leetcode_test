/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // var sumArray = nums1.concat(nums2);
    
    // sumArray = sumArray.sort((a,b)=>a-b);
    
    // var len = sumArray.length;

    // if(len % 2) {
    //   return sumArray[parseInt(len / 2)];
    // }
    // return (sumArray[len / 2] + sumArray[len / 2 - 1]) / 2

    var i = 0, j = 0;
    
    var len = nums1.length + nums2.length;
    var midLen = parseInt(len / 2);
    var arr = [];
    var lastIndex = 0;

    while(true) {
      if(nums1[i] <= nums2[j] || nums2[j] === undefined){
        arr.push(nums1[i]);
        i++;
      } else {
        arr.push(nums2[j]);
        j++;
      }
      if(lastIndex === midLen) break;
      lastIndex++;
    }
    if(len % 2) {
      return arr[lastIndex];
    }
    return (arr[lastIndex - 1] + arr[lastIndex]) / 2;
};

console.log(findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], [0,6]));