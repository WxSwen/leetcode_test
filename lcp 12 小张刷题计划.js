var minTime = (time, m) => {
  let left = 0;
  let right = time.reduce((a, b) => {
    return a + b;
  }, 0);
  let limit = 0;
  while (left < right) {
    limit = (left + right) >> 1;
    if (check(limit, time, m)) {
      right = limit;
    } else {
      left = limit + 1;
    }
  }
  return right;
};
let check = (limit, time, day) => {
  let useday = 1;
  let maxTime = 0;
  let res = limit;
  let flag = true;

  for (let i = 0; i < time.length; i++) {
    maxTime = Math.max(maxTime, time[i]);
    if (res >= time[i]) {
      res -= time[i];
    } else if (flag) {
      res += maxTime;
      flag = false;
      i--;
    } else {
      res = limit;
      useday++;
      flag = true;
      i--;
      maxTime = 0;
    }
  }
  return useday <= day;
};

// 线性单调递增，取出对应的数
console.log(minTime([5, 1, 2, 1, 1, 4, 1, 4, 1], 2));
