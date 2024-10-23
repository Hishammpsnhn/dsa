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
    let cur = this.root;
    if (!this.root) {
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

  insertRecursion(data){
    const newNode = new Node(data)
    if(this.root === null){
        this.root = newNode
    }else{
        this.insertRec(this.root,newNode)
    }
  }
  insertRec(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertRec(root.left,newNode);
      }
    } else {
        if (root.right === null) {
            root.right = newNode;
          } else {
            this.insertRec(root.right,newNode);
          }
    }
  }
  contains(data) {
    let cur = this.root;
    while (cur) {
      if (data < cur.data) {
        cur = cur.left;
      } else if (data > cur.data) {
        cur = cur.right;
      } else {
        return true;
      }
    }
    return false;
  }
  search(root,val){
    if(!root) {
        return false
    }else{
        if(root.data === val){
            return true
        }else if(val < root.data ){
            return this.search(root.left,val)
        }else{
            return this.search(root.right,val)
        }
    }
  }
  preorder(root){
    if(root){
        console.log(root.data)
        this.preorder(root.left)
        this.preorder(root.right)
    }
  }
  inorder(root){
    if(root){
      console.log(root)
        this.inorder(root.left)
        console.log(root.data)
        this.inorder(root.right)
    }
  }
  postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.data)
    }
  }
  bfs(){
    let queue = []
    if(this.root) queue.push(this.root)
    while(queue.length){
        const node = queue.shift()
        console.log(node.data)
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
    }
  }
  min(root){
    if(!root.left){
      return root.data
    }else{
     return this.min(root.left)
    }
  }
  findClosest(target){
    let cur = this.root;
    let closest = cur.data;
    while(cur){
      if(Math.abs(target-closest) > Math.abs(target-cur.data)){
        closest = cur.data;
      }
      if(target < cur.data){
        cur = cur.left
      }else if(target > cur.data){
        cur = cur.right
      }else{
        break
      }
    }
    console.log("closes",closest)
  }
  delete(val){
    this.root = this.deleteNode(this.root,val)
  }
  deleteNode(root,val){
    if(!root) return root;
    if(val<root.data){
      root.left = this.deleteNode(root.left,val)
    }else if(val>root.data){
      root.right = this.deleteNode(root.right,val)
    }else{

      if(!root.left && !root.right){
        return null
      }

      if(!root.left){
        return root.right
      }else if(!root.right){
        return root.left
      }

      root.data = this.min(root.right)
      root.right = this.deleteNode(root.right,root.data)

    }
    return root
  }
  isBst() {
    function valid(node, min, max) {
      if (!node) return true;
      if (!(node.data < max && node.data > min)) return false;
      return valid(node.left, min, node.data) && valid(node.right, node.data, max);
    }
    return valid(this.root, -Infinity, Infinity);
  }
  
 
}
const obj = new BST();
obj.insertRecursion(10);
obj.insertRecursion(5);
obj.insertRecursion(20);
obj.insertRecursion(1);
obj.insertRecursion(8);
// console.log(obj.search(obj.root,10))
// // 0
// obj.findClosest(8)
 obj.bfs()
 console.log(obj.isBst())
obj.inorder(obj.root)