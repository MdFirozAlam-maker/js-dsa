//Reverse String
//Platform: leetcode
link : https://leetcode.com/submissions/detail/1991551452/
let left = 0;
let right = s.length - 1;

for (let i = 0; i < s.length / 2; i++) {
  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
}

return s;