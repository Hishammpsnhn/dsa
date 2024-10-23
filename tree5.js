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
  insert(add) {
    const newNode = new Node(add);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let cur = this.root;
    while (true) {
      if (add > cur.data) {
        if (cur.right) {
          cur = cur.right;
        } else {
          cur.right = newNode;
          break;
        }
      } else if (add < cur.data) {
        if (cur.left) {
          cur = cur.left;
        } else {
          cur.left = newNode;
          break;
        }
      } else {
        break;
      }
    }
  }
  bfs() {
    let q = [];
    let cur = this.root;
    q.push(cur);
    while (q.length > 0) {
      let node = q.shift();
      console.log(node.data);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
  height() {
    let cur = this.root;
    let q = [];
    q.push(cur);
    let height = -1;
    while (q.length > 0) {
      let lvl = q.length;
      height++;
      for (let i = 0; i < lvl; i++) {
        let node = q.shift();
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
      }
    }
    console.log("h", height);
  }
  // isBst() {
  //   function valid(root, min, max) {
  //     if (!root) return true;
  //     if (root.data <= min || root.data >= max) {
  //       return false;
  //     }
  //     return (
  //       valid(root.left, min, root.data) && valid(root.right, root.data, max)
  //     );
  //   }
  //   return valid(this.root, -Infinity, Infinity);
  // }
  isComplete() {
    let cur = this.root;
    let leaf = false;
    let queue = [];
    queue.push(cur);
    while (queue.length > 0) {
      let node = queue.shift();
      if (node.left) {
        if (leaf) return false;
        queue.push(node.left);
      } else {
        leaf = true;
      }
      if (node.right) {
        if (leaf) return false;
        queue.push(node.right);
      } else {
        leaf = true;
      }
    }
    return true;
  }
  isBalanced() {
    function check(node) {
      if (!node) return 0;
      let lh = check(node.left);
      let rh = check(node.right);
      if (lh === -1 || rh === -1 || Math.abs(lh - rh) > 1) {
        return -1;
      }
      return Math.max(lh, rh) + 1;
    }
    return check(this.root) != -1;
  }
  secondLarge(root, c) {
    console.log(c)
    if (!root || c.count >= 2) {
      return ;
    }
    this.secondLarge(root.right,c)
    c.count++
    if(c.count === 2){
        console.log("second lg  is"+root.data)
        return
    }
    this.secondLarge(root.left,c)
  }

  isBst(){
    function valid(root,min,max){
      if(!root) return true
      if(root.data>=min || root.data<=max){
        return false
      }
      return (valid(root.left,min,root.data) && valid(root.right ,root.data,max))
    }
    return valid(this.root,-Infinity,Infinity)
  };
  isBalanced(){
    function check(root){
      if(!root) return 0
      let lh = check(root.left);
      let rh = check(root.right)
      if(lh === -1 || rh === -1|| Math.abs(lh-rh)>=1){
        return false
      }
      return Math.max(lh,rh)+1
    }
    return check(this.root) != -1
  }

}
const obj = new BST();
obj.insert(10);
obj.insert(5);
obj.insert(15);


// console.log(obj);
// obj.bfs();
// obj.height();
// console.log(obj.isComplete());
// console.log(obj.isBalanced());
// let count = {count:0}
// console.log(obj.secondLarge(obj.root,count))
console.log(obj.isBst())
console.log(obj.isBalanced())