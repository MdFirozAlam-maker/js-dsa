//Palindrome
//Platform: Leetcode
//link: https://leetcode.com/submissions/detail/1989975990/
function PalindromeChecking(num) {
  if (num < 0) return;
  let original = num;
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10);
  }

  return rev === original;
}

console.log(PalindromeChecking(121));




