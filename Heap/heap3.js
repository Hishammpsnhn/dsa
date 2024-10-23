class Heap {
  constructor() {
    this.Heap = [];
  }
  getParent(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChild(id) {
    return id * 2 + 1;
  }
  getRightChild(id) {
    return id * 2 + 2;
  }
  swap(id1, id2) {
    return ([this.Heap[id1], this.Heap[id2]] = [
      this.Heap[id2],
      this.Heap[id1],
    ]);
  }

  insert(val) {
    this.Heap.push(val);
    this.headfiyUp();
  }
  headfiyUp() {
    let index = this.Heap.length - 1;
    let pIndex = this.getParent(index);
    while (index > 0) {
      if (this.Heap[pIndex] > this.Heap[index]) break;
      this.swap(index, pIndex);
      index = pIndex;
      pIndex = this.getParent(index);
    }
  }
  max() {
    if (this.Heap.length === 0) return null;
    if (this.Heap.length === 1) return this.Heap.pop();
    let min = this.Heap[0];
    this.Heap[0] = this.Heap.pop();
    this.heapfiyDown();
    return min;
  }
  heapfiyDown() {
     let index = 0;
     while(this.getLeftChild(index) < this.Heap.length ){
         let largeIdx = this.getLeftChild(index)
         let rightIdx = this.getRightChild(index)

         if(rightIdx<this.Heap.length && this.Heap[rightIdx] > this.Heap[largeIdx]){
            largeIdx = rightIdx
         }
         if(this.Heap[largeIdx] < this.Heap[index]) break;

         this.swap(largeIdx,index)
         index = largeIdx
     }
  }
  heapfiyDown() {
    let index = 0;
    while (this.getLeftChild(index) < this.Heap.length) {
      let largeIdx = this.getLeftChild(index);
      let rightIdx = this.getRightChild(index);

      // Change comparison to ensure the parent is greater than the largest child
      if (rightIdx < this.Heap.length && this.Heap[rightIdx] > this.Heap[largeIdx]) {
        largeIdx = rightIdx;
      }
      if (this.Heap[largeIdx] <= this.Heap[index]) break;

      this.swap(largeIdx, index);
      index = largeIdx;
    }
  }
}
const obj = new Heap();
obj.insert(10);
obj.insert(15);
obj.insert(30);
obj.insert(40);
obj.insert(50);
obj.insert(100);
obj.insert(40);

  obj.max()
//obj.max()

console.log(obj);
