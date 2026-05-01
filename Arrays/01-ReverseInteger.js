//Reverse Integer
//Platform: leetcode
link: https://leetcode.com/submissions/detail/1990013231/

function ReverseInteger(num) {
  let nCopy = num;
  num = Math.abs(num);
  if (num === 0) return;
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10);
  }

  return nCopy < 0 ? -rev : rev;
}

console.log(ReverseInteger(-123));