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


let tree = new Tree();
tree.insert(10);
tree.insert(11);
tree.insert(5);
tree.insert(3);

let treeTwo = new Tree();
treeTwo.insert(10);
treeTwo.insert(11);
treeTwo.insert(5);
treeTwo.insert(3);

/* Given the roots of two binary trees p and q, write a function to check if
they are the same or not.

Two binary trees are considered the same if they are structurally identical,
and the nodes have the same value. */

/* Recursive version, makes much more sense
BUGNOTE: Value is my version, val is leetcodes version -_- */

function isSameTreeRecursive(a,b) {
  if (!a && !b) return true;
  if ((!a || !b) || (a.value !== b.value)) return false;

  return (isSameTreeRecursive(a.left, b.left) &&
  isSameTreeRecursive(a.right, b.right))
}




