//Merge sorted Array
// Platofrom: Leetcode
//Link: https://leetcode.com/submissions/detail/1992350987/

const n1 = [1,2,3];
const n2 = [2,5,6];

let n = n1.length;
let m = n2.length;

const n1copy = n1.slice(0,n);

let p1 = 0;
let p2 = 0;

function mergeSortedArray(n1,n1copy,m,n) {
      for(let i=0;i<(m+n);i++) {
        if(p2 >= m || (p1 < m && n1[p1]<n2[p2])){
          n1[i] = n1copy[p1];
          p1++;
        } else {
          n1[i] = n1copy[p2];
          p2++;
        }
      }
      return n1copy;
}

console.log(mergeSortedArray(n1,n2,m,n))



