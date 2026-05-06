const arr = [-1,0,3,5,9,12];
let traget = 12;

let left = 0;
let right = arr.length - 1;

function binarySearch(arr,target) {
  while(left <= right) {
  let middle = Math.floor((left+right)/2);

if(target === middle){
  return middle
} else if(target < middle) {
  right = middle - 1;
} else {
  left = middle + 1;
}


}

return -1;

}
