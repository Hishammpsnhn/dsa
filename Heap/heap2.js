class minHeap {
  constructor() {
    this.heap = [];
  }
  getLeftChild(i) {
    return 2 * i + 1;
  }
  getRightChild(i) {
    return 2 * i + 2;
  }
  getParent(i) {
    return Math.floor((i - 1) / 2);
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }
  heapifyUp() {
    let index =this.heap.length - 1;
    let pIndex = this.getParent(index);
    while (index > 0) {
      if(this.heap[index] > this.heap[pIndex])break;
      this.swap(index,pIndex)
      index = pIndex;
      pIndex = this.getParent(index)
    }
  }
  extractMin(){
    let temp = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown()
    return temp
  }
  heapifyDown(){
    let index = 0;
    while(this.getLeftChild(index) < this.heap.length){
      let small = this.getLeftChild(index)
      let right = this.getRightChild(index)

      if(right <this.heap.length && this.heap[right]<this.heap[small]){
        small = right
      }
      if(this.heap[index] < this.heap[small]){
        break
      }
      this.swap(small,index)
      index = small

    }
  }
}
const obj = new minHeap();
obj.insert(2);
obj.insert(5);
obj.insert(9);
obj.insert(10);
obj.insert(12);
obj.insert(6);
console.log(obj.heap);
obj.extractMin();
obj.extractMin();
console.log(obj.heap);
