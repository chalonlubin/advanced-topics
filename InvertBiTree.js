/* Given the `root` of a binary tree, invert the tree, and return _its root_. */

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // base case, if end of tree return root
  if (root == null) return root;
  // swap
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  // return next root if not null.
  return root;
};
