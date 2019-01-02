function knapsack(weights, values, W) {
  var n = weights.length - 1;
  var f = [[]];

  for(var j = 0;j <= W; j++) {
    for(var i = 1; i<= n; i++) {
      if(!f[i]) {
        f[i] = [[]];
      }
      if(j < weight[i]) {
        f[i][j] = f[i - 1][j];
      } else {
        f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i]);
      }
    }
  }
}