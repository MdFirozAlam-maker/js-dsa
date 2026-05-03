const arr = [5,3,2,0,1];

// function sum(arr) {
//   if(arr.length === 0) return 0;
//   return arr[0] + sum(arr.slice(1))
// }

// console.log(sum(arr));

function sum(arr,i=0) {
  if(i === arr.length) return 0;
  return arr[i] + sum(arr,i+1)
}

console.log(sum(arr))