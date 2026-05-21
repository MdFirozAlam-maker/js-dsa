function LongestCommonPrefix(strs) {
  let x = 0;
  while(x < strs[0].length) {
    let ch = strs[0][x];
    for(let i=1;i<strs.length;i++) {
      if(ch !== strs[i][x] || x === strs[i].length){
        return strs.substring(0,x-1);
      }
    }
    x++;
  }

  return strs[0];
}