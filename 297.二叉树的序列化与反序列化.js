/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const deserialize = (data) => {
  if (data == "X") return null; // 就一个'X'，只有一个null
  const list = data.split(","); // 序列化字符串转成list数组
  const root = new TreeNode(list[0]); //首项是根节点值，为它创建节点
  const queue = [root]; // 初始放入root，待会出列考察
  let cursor = 1; // 从list第二项开始遍历
  while (cursor < list.length) {
    // 指针越界就退出
    const node = queue.shift(); // 父节点出列考察
    const leftVal = list[cursor]; // 获取左子节点值
    const rightVal = list[cursor + 1]; // 获取右子节点值
    if (leftVal !== "X") {
      // 左子节点值是有效值
      const leftNode = new TreeNode(leftVal); // 创建节点
      node.left = leftNode; // 成为当前出列节点的左子节点
      queue.push(leftNode); // 它是未来的爸爸，入列等待考察
    }
    if (rightVal !== "X") {
      // 右子节点值是有效值
      const rightNode = new TreeNode(rightVal); // 创建节点
      node.right = rightNode; // 成为当前出列节点的右子节点
      queue.push(rightNode); // 它是未来的爸爸，入列等待考察
    }
    cursor += 2; // 指针前进2位
  }
  return root; // 返回根节点
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
