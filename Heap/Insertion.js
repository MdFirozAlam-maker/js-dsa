// Min Heap 

class MinHeap {
  constructor () {
    //this.heap = [];
    this.heap = [5, 10, 20, 30];
  }

  getLeftChildIndex(i) {
    return (2 * i) + 1;
  }

  getRightChildIndex(i) {
    return (2 * i) + 2;
  }

  getParentIndex(i) {
    return Math.floor((i-1)/2);
  }

  insert(val) {
    this.heap.push(val);
    let currIndex = this.heap.length - 1;
    let tempIndex = this.getParentIndex(currIndex);
    while(currIndex !== 0 && this.heap[tempIndex] > this.heap[currIndex]) {
        let temp = this.heap[currIndex];
        this.heap[currIndex] = this.heap[tempIndex];
        this.heap[tempIndex] = temp;
        currIndex = tempIndex;
        tempIndex = this.getParentIndex(currIndex);
    }
  }
}