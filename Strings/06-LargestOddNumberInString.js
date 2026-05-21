// function largestOddNumber(s) {
//   let map = {};
//   for(let i=0;i<s.length;i++) {
//     if(s[i] % 2 !== 0) {
//       map[s[i]] = s[i];
//     }
//   }
//   let maxOdd = 0;
//   for(let i=0;i<s.length;i++) {
//     if(map[s[i]] > maxOdd) {
//       maxOdd = map[s[i]];
//     }
//   }

//   return maxOdd;
// }

// console.log(largestOddNumber("5427"))


function LargestOddNumberSubstring(s) {
    let n = s.length - 1;
    while(n>=0) {
      if(Number(s[n]) % 2 !== 0) {
        return s.substring(0,n+1)
      }else {
        n--;
      }
    }

    return "";


}

console.log(LargestOddNumberSubstring("520146"))