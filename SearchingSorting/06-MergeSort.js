const arr = [3,4,7,8,9,1];

function MergeSort(arr) {
  if(arr.length<=1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = MergeSort(arr.slice(0,mid));
  let right = MergeSort(arr.slice(mid))
  return merge(left,right);
}

function merge(left,right) {
  let i=0;
  let j=0;
  let result = [];
  while(i<left.length && j<right.length) {
    if(left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }

    
  }

  return([...result, ...left.slice(i), ...right.slice(j)])
  
}

console.log(MergeSort(arr))