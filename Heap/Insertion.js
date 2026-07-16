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

  extract() {
    if(this.heap.length < 1) return null;

    let min = this.heap[0];
    let lastIndex = this.heap.length - 1;


    [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];

    this.heap.pop();

    this.heapifyDown(0);

    return min;
  }

  heapifyDown(i) {
    let left = this.getLeftChildIndex(i);
    let right = this.getRightChildIndex(i);
    let n = this.heap.length;

    let smallest = i;
    if(left < n && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

       if(right < n && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if(smallest != i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.heapifyDown(smallest);
    }
  }
}

const heap = new MinHeap();
heap.insert(1);
console.log(heap.extract());


