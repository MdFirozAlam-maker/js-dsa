//MissingNumber
//Platform: Leetcode
//Link: https://leetcode.com/problems/missing-number/
//Time complexity: O(n);
//Spce Complexity: O(1)
const arr = [4, 0, 2, 1, 5];
let n = arr.length;

function FindingMissingNumber(arr) {
  let actualResult = (n * (n + 1)) / 2;
  let partialSum = 0;
  for (let i = 0; i < arr.length; i++) {
    partialSum = partialSum + arr[i];
  }

    return actualResult - partialSum;
}

console.log(`We get the missing number`,FindingMissingNumber(arr))

