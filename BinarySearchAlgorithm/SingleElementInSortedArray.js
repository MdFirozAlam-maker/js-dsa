const nums = [1,1,3,3,4,4,7,8,8];

function SearchSingleNonDuplicate(nums) {
  let l = 0;
  let r = nums.length - 1;

  while(l <= r) {
    let m = l + Math.floor((r - l)/2);
    if(nums[m] === nums[m-1]) {
      leftCount = m - 1 - l;
      if(leftCount%2 === 1) {
        r = m - 2;
      }else {
        l = m + 1;
      }
    }else if(nums[m] === nums[m+1]) {
      leftCount = m - l;
      if(leftCount%2 === 1) {
        r = m - 1;
      }else {
        l = m + 2;
      }
    }else {
      return nums[m];
    }
  }
}


console.log(SearchSingleNonDuplicate(nums))