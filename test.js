var a = [
  { val: 8, i: 0 },
  { val: 1, i: 1 },
  { val: 5, i: 2 },
  { val: 2, i: 3 },
  { val: 6, i: 4 },
];

console.log(a.sort((a, b) => a.val - b.val));
