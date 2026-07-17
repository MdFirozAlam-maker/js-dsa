let arr = [10,4,5,1,3];

function heapSort(arr) {
  let n = arr.length;

  //create a max heap
  for(let i = n-1;i >= 0; i--) {
    heapfifyDown(arr,i,n);
  }

  console.log(arr);

  //sort the array

  for(let i=n-1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapfifyDown(arr, 0 , i);
  }

  return arr;
}



function heapfifyDown(arr, i,n) {
  let largest = i;
  let leftChild = (2 * i) + 1;
  let rightChild = (2 * i) + 2;

  if(leftChild < n && arr[leftChild] > arr[largest]) {
    largest = leftChild;
  }

  if(rightChild < n && arr[rightChild] > arr[largest]) {
    largest = rightChild;
  }

  if(largest != i) {
    [arr[i],arr[largest]] = [arr[largest],arr[i]];
    heapfifyDown(arr,largest,n);
  }
}

const sortedArray = heapSort(arr);
console.log(sortedArray);
