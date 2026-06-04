function Sqrt(x) {
  if(x<2) return x;

  let l = 2;
  let r = Math.floor(x/2);

  while(l <= r) {
    let mid = l + Math.floor((r - l)/2);

    if(mid**2 === x) {
      return mid;
    }else if(x > mid**2) {
      l = mid + 1;
    }else {
      r = mid - 1;
    }
  }

  return r;
}

console.log(Sqrt(8))