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
    const newNOde = new Node(data);

    if (!this.root) {
      this.root = newNOde;
      return;
    }
    let cur = this.root;
    while (true) {
      if (data < cur.data) {
        if (cur.left) {
          cur = cur.left;
        } else {
          cur.left = newNOde;
          break;
        }
      } else if (data > cur.data) {
        if (cur.right) {
          cur = cur.right;
        } else {
          cur.right = newNOde;
          break;
        }
      } else {
        break;
      }
    }
  }
  BFS() {
    let q = [];
    q.push(this.root);
    while (q.length > 0) {
      const node = q.shift();
      console.log(node.data);

      if (node.left) {
        q.push(node.left);
      }
      if (node.right) q.push(node.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
    }
  }
  min(root) {
    if (root.left) {
      return this.min(root.left);
    } else {
      return root.data;
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
  isBst() {
    function valid(root, min, max) {
      if (!root) return true;
      if (!(root.data > min && root.data < max)) {
        return false;
      }
      return (
        valid(root.left, min, root.data) && valid(root.right, root.data, max)
      );
    }
    return valid(this.root, -Infinity, Infinity);
  }
  height(cur) {
    let q = [];
    q.push(cur);
    let h = -1;
    while (q.length > 0) {
      let rig = q.length;
      h++;
      for (let i = 0; i < rig; i++) {
        let node = q.shift();
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
      }
    }
    console.log("heig", h);
  }
  // isBalanced() {
  //   function Helper(node) {
  //     if (node === null) return 0;

  //     const lh = Helper(node.left);
  //     const lr = Helper(node.right);
  //     if (lh === -1 || lr === -1 || Math.abs(lh - lr) > 1) {
  //       return -1;
  //     }
  //     return Math.max(lh, lr) + 1;
  //   }

  //   return Helper(this.root) !== -1;
  // }
  // isComplete() {
  //   let cur = this.root;
  //   if (!cur) return true;
  //   let q = [];
  //   q.push(cur);
  //   let leaf = false;
  //   while (q.length > 0) {
  //     const node = q.shift();
  //     if (node.left) {
  //       if (leaf) return false;
  //       q.push(node.left);
  //     } else {
  //       leaf = true;
  //     }
  //     if (node.right) {
  //       if (leaf) return false;
  //       q.push(node.right);
  //     } else {
  //       leaf = true;
  //     }
  //     return true;
  //   }
  // }
  findClosest(target) {
    let cur = this.root;
    let close = cur.data;
    while (cur) {
      if (Math.abs(target - close) > Math.abs(target - cur.data)) {
        close = cur.data;
      }
      if (target < cur.data) {
        cur = cur.left;
      } else if (target > cur.data) {
        cur = cur.right;
      } else {
        break;
      }
    }
    console.log(close);
  }
  isComplete() {
    let cur = this.root;
    let q = [];
    let leaf = false;
    q.push(cur);
    while (q.length > 0) {
      let node = q.shift();
      console.log(node);
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
  isBalanced() {
    function valid(node) {
      if (node === null) return 0;
      let lh = valid(node.left);
      let rh = valid(node.right);
      if (lh === -1 || rh === -1 || Math.abs(lh - rh) > 1) {
        return -1;
      }
      return Math.max(lh , rh) + 1;
    }
    return valid(this.root) !== -1;
  }
  secondLg(root, c) {
    if (root === null || c.count >= 2) {
      return;
    }
    this.secondLg(root.right, c);
    c.count++;
    if (c.count === 2) {
      console.log("second lg num" + root.data);
      return;
    }
    this.secondLg(root.left,c);
  }
  
}
const obj = new BST();
obj.insert(10);
obj.insert(15);
obj.insert(5);
obj.insert(2);
obj.insert(1);
obj.insert(7);
obj.insert(25);
obj.insert(22);

// console.log(obj);
// obj.postOrder(obj.root);
// console.log(obj.min(obj.root))
// obj.BFS()
// console.log("jdkd");

// obj.delete(5)
// obj.BFS()
// console.log(obj.isBst())
// obj.height(obj.root);
// console.log(obj.isBalanced())
// console.log(obj.isComplete());

// obj.findClosest(7);
// console.log(obj.isBalanced());
const counter = { count: 0 };
obj.secondLg(obj.root, counter);
