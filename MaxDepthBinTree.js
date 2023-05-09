class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) return this;
      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
          continue;
        }
        currentNode.right = newNode;
        return this;
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
          continue;
        }
        currentNode.left = newNode;
        return this;
      }
    }
  }

  find(value) {
    let current = this.root;

    if (this.root === null) return false;

    while (true) {
      if (current.value === value) return true;

      if (current.value > value) {
        current = current.right;
      } else {
        current = current.left
      }

      if (current === null) return false;
    }
  }

  bfs() {
    if (this.root === null) return "Root not present"
    let queue = [this.root]
    let contents = [];
    while (queue.length > 0) {
      let current = queue.shift();
      contents.push(current)
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return contents
  }

  dfsPre() {
    let contents = [];
    function traverse(node) {
      contents.push(node.value)
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return contents;
  }

  dfsPost() {
    let contents = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      contents.push(node.value)
    }

    traverse(this.root);
    return contents;
  }


  dfsInOrder() {
    let contents = [];

    function traverse(current) {
      current.left && traverse(current.left);
      contents.push(current.value)
      current.right && traverse(current.right);
    }
    traverse(this.root)
    return contents;
  }
}



/* Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path
from the root node down to the farthest leaf node. */

const maxDepth = function(root) {
  // traverse down the tree counting levels on the way down
  // return the lowest once we've reached the bottom
  let max = 0;

  function traverse(node, depth) {
    if (!node) return;
    // if we have reached the bottom, compare total depth
    if (!node.left && !node.right) {
      max = Math.max(max, depth)
    }
    traverse(node.left, depth+1);
    traverse(node.right, depth+1);

  }

  traverse(root, 1);
  return max;

}

let tree = new Tree();
tree.insert(10);
tree.insert(11);
tree.insert(5);
tree.insert(3);
console.log(maxDepth(tree.root));