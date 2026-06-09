const arr = [2,4,8,1,3,5];

function PeakElement(arr) {
  let l = 0;
  let r = arr.length - 1;

  while(l < r) {
    let m = l + Math.floor((r - l)/2);
    if(arr[m+1] > arr[m]) {
      l = m + 1;
    }else {
      r = m;
    }
  }

  return l;
}

console.log(PeakElement(arr));