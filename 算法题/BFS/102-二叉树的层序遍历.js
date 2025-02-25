/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  const ans = [];
  const q = [root];
  while (q.length > 0) {
    const vals = []; //存储当前层的节点值
    const n = q.length;
    // 注意要循环遍历  ->  正确遍历当前层的所有节点
    for (let i = 0; i < n; i++) {
      const node = q.shift();
      vals.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    ans.push(vals);
  }
  return ans;
};
