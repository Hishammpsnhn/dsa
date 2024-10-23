class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let cur = this.root;
    while (true) {
      if (newNode.data < cur.data) {
        if (cur.left) {
          cur = cur.left;
        } else {
          cur.left = newNode;
          break;
        }
      } else {
        if (cur.right) {
          cur = cur.right;
        } else {
          cur.right = newNode;
          break;
        }
      }
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.data);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  search(data, root) {
    if (!root) return false;
    if (data < root.data) {
      return this.search(data, root.left);
    } else if (data > root.data) {
      return this.search(data, root.right);
    } else {
      return true;
    }
  }
  min(root) {
    if (root.left) {
      return this.min(root.left);
    } else {
      return root.data;
    }
  }
  max(root) {
    if (root.right) {
      return this.max(root.right);
    } else {
      return root.data;
    }
  }
  bfs() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      console.log(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  delete(val) {
    this.root = this.deleteNode(this.root, val);
  }
  deleteNode(root, val) {
    if (!root) return root;
    if (val < root.data) {
      root.left = this.deleteNode(root.left, val);
    } else if (val > root.data) {
      root.right = this.deleteNode(root.right, val);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.data = this.min(root.right);
      root.right = this.deleteNode(root.right, root.data);
    }
    return root;
  }
  closeToMe(val) {
    let cur = this.root;
    let close = this.root.data;
    while (cur) {
      if (Math.abs(val - close) > Math.abs(val - cur.data)) {
        close = cur.data;
      }
      if (val < cur.data) {
        cur = cur.left
      }else if(val > cur.data){
        cur = cur.right
      }else{
        break
      }
    }
    console.log("closest",close)
  }
}
const obj = new BST();
obj.insert(10);
obj.insert(20);
obj.insert(15);
obj.insert(30);
obj.insert(5);
obj.delete(10);
obj.bfs();
obj.closeToMe(7)