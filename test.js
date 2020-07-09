const perm = (s) => {
  let res = [];
  if (s.length === 1) {
    return [s];
  }

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    let str = s.slice(0, i) + s.slice(i + 1, s.length);
    let l = perm(str);

    for (let j = 0; j < l.length; j++) {
      let temp = c + l[j];
      res.push(temp);
    }
  }
  return res;
};

console.log(perm("abc"));
