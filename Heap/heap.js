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
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let pIndex = this.getParent(index);
      if (this.heap[pIndex] <= this.heap[index]) break;
      this.swap(pIndex, index);
      index = pIndex;
    }
  }
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) this.heap.pop();
    let min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown()
    return min
  }
  heapifyDown(){
    let index = 0;
    while(this.getLeftChild(index) < this.heap.length){
        let smallIdx = this.getLeftChild(index)
        let rightIdx = this.getRightChild(index)

        if(rightIdx < this.heap.length && this.heap[smallIdx] > this.heap[rightIdx]){
            smallIdx = rightIdx
        }

        if(this.heap[index] <= this.heap[smallIdx]) break;
        this.swap(index,smallIdx)
        index = smallIdx
    }
    
  }
}

const obj = new minHeap();
obj.insert(2);
obj.insert(5);

obj.insert(10);
obj.insert(6);
obj.insert(12);
obj.insert(9);
console.log(obj.heap);
