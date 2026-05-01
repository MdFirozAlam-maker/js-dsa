//Remove element
//Platform: Leetcode
//link:https://leetcode.com/submissions/detail/1990845784/
function ReverseInteger(arr, val) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[x] = arr[i];
      x++;
    }
  }
  return x;
}

console.log(ReverseInteger(arr, 3));