class Heap{
    constructor(){
        this.heap = []
    }
    getParent(i){
        return Math.floor((i-1)/2)
    }
    getLeftChild(i){
        return i*2+1
    }
    getRightChild(i){
        return i*2+2
    }
    swap(idx1,idx2){
        [[this.heap[idx1]],[this.heap[idx2]]] = [[this.heap[idx2]],[this.heap[idx1]]]
    }
    insert(val){
        this.heap.push(val)
        this.heapfyUp()

    }
    heapfyUp(){
        let index = this.heap.length-1
        let pIndex = this.getParent(index)
        while(index>0){
            if(this.heap[index]<this.heap[pIndex]) break;
            this.swap(pIndex,index)
            index = pIndex;
            pIndex = this.getParent(index)
        }
    }
    max(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()
        let temp = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return temp
    }
    heapifyDown(){
        let index = 0;
        while(this.getLeftChild(index)<this.heap.length){
            let largeIdx = this.getLeftChild(index)
            let rightIdx = this.getRightChild(index)

            if(rightIdx<this.heap.length && this.heap[rightIdx] > this.heap[largeIdx]) {
                largeIdx = rightIdx
            }
            if(this.heap[largeIdx] <= this.heap[index]) break;
            this.swap(largeIdx,index)
            index = largeIdx
        }
    }
}

const heap = new Heap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(30);
heap.insert(15);

// console.log("Max:", heap.max()); // Should return 30
// console.log("Max:", heap.max()); // Should return 20
console.log("Heap array:", heap.heap); // Remaining elements in heap