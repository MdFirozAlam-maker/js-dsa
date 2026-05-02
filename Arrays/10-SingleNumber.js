//SingleNumber
//Platform : Leetcode
//Link: https://leetcode.com/problems/single-number/description/
//Time complexity : O(n);
//Space Complexity: O(n)

let arr = [4,1,2,1,2];
let count = {};

function FindSingleNumber(arr) {
  for(let i=0;i<arr.length;i++) {
    if(!count[arr[i]]){
      count[arr[i]] = 1;
    } else {
      count[arr[i]]++;
    }
  }

  for(let i=0;i<arr.length;i++) {
    if(count[arr[i]] === 1){
      return arr[i];
    }
  }
}

console.log(FindSingleNumber(arr))   


//Better Approach(Bit Manipulation)
//TimeComplexity: O(n)
//Space Complexity: O(1)

let result = 0;
for(let i=0;i<arr.length;i++) {
  result = result ^ arr[i];
}

console.log(result);

