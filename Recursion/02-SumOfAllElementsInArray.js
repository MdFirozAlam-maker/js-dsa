const arr = [5,3,2,0,1];
let n = arr.length;


//First Approach
// function sum(arr) {
//   if(arr.length === 0) return 0;
//   return arr[0] + sum(arr.slice(1))
// }

// console.log(sum(arr));

//Second Approach
// function sum(arr,i=0) {
//   if(i === arr.length) return 0;
//   return arr[i] + sum(arr,i+1)
// }

// console.log(sum(arr))


//Third Approach

// function sum(n) {
//   if(n===0) return arr[0];
//     return arr[n] + sum(n-1);
//   }

// console.log(sum(arr.length-1))

// function sum(n) {
//   let isOdd = arr[n] %2 != 0;
//   if(n===0){
//     return isOdd ? arr[n] : 0;
//   }
//   if(isOdd) {
//     return (isOdd ? arr[n] : 0) + sum(n-1);
//   }

// }
// console.log(sum(arr.length-1))
