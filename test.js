/**
 * @param {number[]} nums
 * @return {number}
 */
function converToTree(data) {
  let res = {};

  for (let i = 0; i < data.length; i++) {
    recurse(data[i], res);
  }

  return res;
}
function recurse(item, res) {
  let { id, parentId, label } = item;
  if (!parentId) {
    res.id = id;
    res.label = label;
    res.children = [];
  } else {
    if (parentId === res.id) {
      if (!res.children) res.children = [];
      res.children.push({
        id,
        label,
      });
    } else if (res.children) {
      for (let i = 0; i < res.children.length; i++) {
        recurse(item, res.children[i]);
      }
    }
  }
}

console.dir(
  converToTree([
    { id: 1, parentId: null, label: 1 },
    { id: 2, parentId: 1, label: 2 },
    { id: 3, parentId: 2, label: 3 },
    { id: 4, parentId: 1, label: 4 },
    { id: 5, parentId: 4, label: 5 },
    { id: 6, parentId: 1, label: 6 },
    { id: 7, parentId: 6, label: 7 },
    { id: 8, parentId: 7, label: 8 },
    { id: 9, parentId: 8, label: 9 },
  ])
);
