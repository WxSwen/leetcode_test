// 1.最简单
// function knapsack(weights, values, W) {
//   var f = [[]];
//   var n = weights.length - 1;

//   for(let j = 0; j <= W; j++) {
//     f[0][j] = weights[0] > j ? 0 : values[0];
//   }
//   for(let j = 0; j <= W; j++) {
//     for(let i = 0; i <= n; i++) {
//       if(!f[i]) {
//         f[i] = [];
//       }
//       if(j < weights[i]) {
//         f[i][j] = f[i-1][j];
//       } else {
//         f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i])
//       }
//     }
//   }

//   return f[n][W];
// }

// 2. 优化
function knapsack(weights, values, W) {
  
}