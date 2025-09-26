class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      console.log("----- INSERT ROOT -----");
      this.PrintTree();
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            console.log(`----- INSERT ${val} LEFT -----`);
            this.PrintTree();
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            console.log(`----- INSERT ${val} RIGHT -----`);
            this.PrintTree();
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (this.root === null) return undefined;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;

    console.log(`----- FOUND ${val} -----`);
    this.PrintTree();
    return current;
  }

  contains(val) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        console.log(`----- CONTAINS ${val} -----`);
        this.PrintTree();
        return true;
      }
    }
    console.log(`----- DOES NOT CONTAINS ${val} -----`);
    this.PrintTree();
    return false;
  }

  PrintTree(node = this.root, prefix = "") {
    if (!node) return;
    console.log(prefix + node.val);
    this.PrintTree(node.left, prefix + "L -> ");
    this.PrintTree(node.right, prefix + "R -> ");
  }
}

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(100);
tree.insert(200);
tree.insert(5);
tree.insert(15);
tree.insert(1);

tree.find(15);
