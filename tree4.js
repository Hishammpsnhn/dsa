class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const newNode = new Node(data);
    let cur = this.root;
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    while (true) {
      if (data < cur.data) {
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
  contain(root, data) {
    if (!root) {
      return false;
    }
    if (data < root.data) {
      return this.contain(root.left, data);
    } else if (data > root.data) {
      return this.contain(root.right, data);
    } else {
      return true;
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.data);
      this.inOrder(root.right);
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.data);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.data);
    }
  }
  bfs() {
    let queue = [];
    let cur = this.root;
    queue.push(cur);

    while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.data);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  //   min() {
  //     let cur = this.root;
  //     if (!cur) return null;
  //     while (cur.left) {
  //       cur = cur.left;
  //     }
  //     console.log(cur.data);
  //   }
  minRec(root) {
    if (!root.left) {
      return root.data;
    } else {
      return this.minRec(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return root.data;
    } else {
      return this.max(root.right);
    }
  }
  maxIte() {
    let cur = this.root;
    if (!cur) return null;
    while (cur.right) {
      cur = cur.right;
    }
    return cur.data;
  }
  //   findCloseest(target) {
  //     let cur = this.root;
  //     let closest = cur.data;
  //     while (cur) {
  //       if (Math.abs(cur.data - target) < Math.abs(target - closest)) {
  //         closest = cur.data;
  //       }
  //       if (target < cur.data) {
  //         cur = cur.left;
  //       } else if (target > cur.data) {
  //         cur = cur.right;
  //       } else {
  //         break;
  //       }
  //     }
  //     console.log(closest);
  //   }
  min(root) {
    if (!root.left) {
      return root.data;
    } else {
      return this.min(root.left);
    }
  }
  sum() {
    let sum = 0;
    function Rec(cur) {
      if (cur) {
        Rec(cur.left);
        console.log(cur.data);
        sum += cur.data;
        Rec(cur.right);
      }
    }
    Rec(this.root);
    console.log("sume", sum);
  }
  max2(root) {
    if (!root.right) {
      return root.data;
    } else {
      return this.max2(root.right);
    }
  }
  delete(data) {
    this.root = this.deleteNode(this.root, data);
    console.log(this.root);
  }
  deleteNode(root, data) {
    if (!root) return root;
    if (data < root.data) {
      root.left = this.deleteNode(root.left, data);
    } else if (data > root.data) {
      root.right = this.deleteNode(root.right, data);
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
      console.log("01", root.data);
      root.right = this.deleteNode(root.right, root.data);
    }
    return root;
  }
  isBst() {
    function valid(node, min, max) {
      if (!node) return true;
      if (!(node.data < max && node.data > min)) return false;
      return (
        valid(node.left, min, node.data) && valid(node.right, node.data, max)
      );
    }
    return valid(this.root, -Infinity, Infinity);
  }
  height() {
    let cur = this.root;
    let queue = [];
    let height = -1;
    queue.push(cur);
    while (queue.length > 0) {
      let levelSize = queue.length;
      height++;
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    console.log(height);
  }
  search(root, val) {
    if (!root) {
      return false;
    }
    if (root.data === val) return true;
    if (val < root.data) {
      return this.search(root.left, val);
    } else {
      return this.search(root.right, val);
    }
  }
 

  isComplete() {
    let cur = this.root;
    let q = [];
    q.push(cur);
    let leaf = false;
    while (q.length > 0) {
      let node = q.shift();
      if (node.left) {
        if (leaf) return false;
        q.push(node.left);
      } else {
        leaf = true;
      }
      if (node.right) {
        if (leaf) return false;
        q.push(node.right);
      } else {
        leaf = true;
      }
    }
    return true;
  }

}
const obj = new Tree();
obj.insert(10);
obj.insert(20);
obj.insert(5);
obj.insert(30);
obj.insert(15);

// obj.height();
// console.log(obj);
// console.log(obj.contain(obj.root, 30));
// obj.postOrder(obj.root);
// obj.bfs()
// console.log(obj.minRec(obj.root));
// console.log(obj.max(obj.root))
// console.log(obj.maxIte())
// obj.findCloseest()
// obj.min(obj.root)
// obj.sum();
// console.log(obj.max2(obj.root));
// obj.sum();
// obj.bfs()
// obj.delete(20)
// // console.log(obj.inOrder(obj.root))
// // obj.sum();
// obj.inOrder(obj.root)
// obj.bfs()
// console.log(obj.isBst())
// console.log(obj.height(obj.root))
// console.log(obj.search(obj.root, 3));
// console.log(obj.isBalanced(obj.root))
// console.log(obj.isComplete())

obj.findClosest(17);
