//MaxconsecutiveOnes
//Platform: Leetcode
//link :https://leetcode.com/submissions/detail/1992570773/
const arr = [1,1,0,1,1,1,0,1,1,0,1]

function FindingmaxCounsecutiveOnes(arr) {
  let count = 0;
  let maxconsective = 0;

  for(let i=0;i<arr.length;i++) {
    if(arr[i] === 1) {
      count++;
      if(count > maxconsective) {
        maxconsective = count;
      }
    
     
    } else {
      count = 0;
    }
    
  }
  return maxconsective;
}

console.log(FindingmaxCounsecutiveOnes(arr))