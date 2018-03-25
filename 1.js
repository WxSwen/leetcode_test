var twoSum = function(nums, target) {
//   1. for(let i = nums.length - 1; i >= 0; i--){
//       let cur = nums.indexOf(target - nums[i]);

//       if(~cur && cur !== i){
//           return [i, cur];
//       }
//   }

    // 2. var calculate = 0;
    // var maxLength = nums.length;
    // while(calculate < maxLength) {
    //     let cur = nums.indexOf(target - nums[calculate]);

    //     if(~cur && cur !== calculate){
    //         return [calculate, cur];
    //     }
    //     ++calculate;
    // }

    // 3.var len = nums.length;
    // for(let i = len - 1; i > 0; i--){
    //     for(let j = i - 1; j >= 0; j--) {
    //         if(nums[i] + nums[j] === target) return [j, i];
    //     }
    // }


    var len = nums.length,
        hash = Object.create(null);

    for(var i = len - 1; i >= 0; i--){
        var num = nums[i];

        var index = hash[target - num];

        if(index !== undefined) return [i, index];

        hash[num] = i;
    }

};
var nums = [3,2,4], target = 6;
console.log(twoSum(nums, target));