const arr = [2,4,8,9,10,12,15];

function FirstBadVersion(arr) {
  let l = 1;
  let r = arr.length - 1;

  while(l < r) {
    let mid = l + Math.floor((r-l)/2);
    let res = isBadVersion(mid);
    if(res === true) {
      r = mid;
    }else {
      l = mid;
    }
  }
  return l;
}