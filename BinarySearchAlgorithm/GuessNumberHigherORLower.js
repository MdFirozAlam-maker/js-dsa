function GuessNumber(x) {
  let l = 1;
  let r = x;
  while(l <= r) {
    let mid = l + Math.floor((r-l)/2);
    let res = guessApi(mid);
    if(res === 0) {
      return mid;
    }else if(res === -1) {
      l = mid + 1;
    }else {
      r = mid - 1;
    }

  }

  return -1;
}