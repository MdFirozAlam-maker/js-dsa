const n = 4;
function PowerofTwo(n) {
  if(n===1) {
    return true;
  }
  else  if(n%2 != 0 || n<= 0) {
    return false;
  }

  return PowerofTwo(n/2);
}

console.log(PowerofTwo(n))
