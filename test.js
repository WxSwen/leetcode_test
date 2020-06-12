var isSubsequence = function (s, t) {
  let s_arr = s.split("");
  let t_arr = t.split("");
  let index = 0;

  for (let i = 0; i < t_arr.length; i++) {
    if (s_arr[index] === t_arr[i]) {
      index++;
    } else {
      continue;
    }
  }
  return index === s_arr.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
