//Remove Duplicate
//Platform: Leetcode
//Link: https://leetcode.com/submissions/detail/1990808195/

function RemovingDuplicate(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x++;
      arr[x] = arr[i];
    }
  }
  return x + 1;
}

console.log(RemovingDuplicate(arr));