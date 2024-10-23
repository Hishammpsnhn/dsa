class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class Btree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
      if (this.root == null) {
        this.root = newNode;
      } else {
        this.insertHelper(this.root, newNode);
      }
    }
  
    insertHelper(root, newNode) {
      if (newNode.data < root.data) {
        if (root.left) {
          this.insertHelper(root.left, newNode);
        } else {
          root.left = newNode;
        }
      } else {
        if (root.right) {
          this.insertHelper(root.right, newNode);
        } else {
          root.right = newNode;
        }
      }
    }
  
    search(root, val) {
      if (!root) {
        return false;
      } else {
        if (root.data === val) {
          return true;
        }
        if (val < root.data) {
          return this.search(root.left, val);
        } else {
          return this.search(root.right, val);
        }
      }
    }
  
    inorder(root) {
      if (root) {
        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
      }
    }
  
    bfs() {
      let queue = [];
      if (this.root) queue.push(this.root);
      while (queue.length) {
        let node = queue.shift();
        console.log(node.data);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  
    min(root) {
      if (!root.left) {
        return root.data;
      } else {
        return this.min(root.left);
      }
    }
  
    max(root) {
      if (!root.right) {
        return root.data;
      } else {
        return this.max(root.right);  // Use the current node's root reference
      }
    }
  
    delete(val) {
      this.root = this.deleteNode(this.root, val);
    }
  
    deleteNode(root, val) {
      if (root === null) return root;
  
      if (val < root.data) {
        root.left = this.deleteNode(root.left, val);
      } else if (val > root.data) {
        root.right = this.deleteNode(root.right, val);
      } else {
        // Node to be deleted found
        if (!root.left && !root.right) {
          return null;
        }
  
        if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }
  
        // Node with two children: find the inorder successor
        root.data = this.min(root.right);
        root.right = this.deleteNode(root.right, root.data);
      }
  
      return root;
    }
  }
  
  // Example usage
  const obj = new Btree();
  obj.insert(10);
  obj.insert(5);
  obj.insert(20);
  obj.insert(8);
  obj.insert(2);
  
  obj.delete(10);
  obj.bfs();
  