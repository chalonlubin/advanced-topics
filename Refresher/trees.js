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
      if (currentNode.value > value) {
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

}

let tree = new Tree();
tree.insert(10);
tree.insert(11);
tree.insert(5);
tree.insert(3);
console.log(tree.find(5))
console.log(tree.find(20))
console.log(tree.bfs())
