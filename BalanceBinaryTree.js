"use strict";

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
 * @return {boolean}
 */

// Stumped. Need to ask about this one.
var isBalanced = function (root, r = 0, l = 0) {
  if (root === null) return false;
  isBalanced(root.left, r, l + 1);
  isBalanced(root.right, r + 1, l);
  return Math.abs(r - l) <= 1;
};
