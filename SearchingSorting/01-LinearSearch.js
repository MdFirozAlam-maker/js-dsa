const arr = [4,9,1,0,2];
let target = 10;

function LinearSearch(arr,target) {
  if(arr.length === 0) return -1;
  for(let i=0;i<arr.length;i++) {
    if(arr[i] === target) {
      return i;
    }
  }
  return -1;

}

console.log(LinearSearch(arr,target))

console.log(arr.indexOf(target))  // Second Approach - it gives index and if not present target it returns -1;

console.log(arr.includes(target)) // Third Approach it gives you true if present and false if not
