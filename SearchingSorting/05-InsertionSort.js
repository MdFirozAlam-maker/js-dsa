const arr = [3,4,7,5,1,2];

function InsertionSort(arr) {
for(let i=1;i<arr.length;i++) {
  let curr = arr[i];
  let previous = i-1;

  while(arr[previous] > curr && previous >= 0) {
    arr[previous+1] = arr[previous]
    previous--;
  }

  arr[previous+1] = curr;

}

return arr;
}


console.log(InsertionSort(arr))
