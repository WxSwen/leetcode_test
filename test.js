var permute = function (nums) {
  let res = [];
  if (nums.length === 1) return [nums];

  for (let i = 0; i < nums.length; i++) {
    let p = [...nums];
    let c = nums[i];
    p.splice(i, 1);
    let l = permute(p);

    for (let j = 0; j < l.length; j++) {
      let temp = [c, ...l[j]];
      res.push(temp);
    }
  }
  return res;
};
console.log(permute([1, 2, 3]));
