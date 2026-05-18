function FindWordsContaning(s,x) {
  let res = [];
  for(let i=0;i<s.length;i++) {
    for(let j=0;j<s[i].length;j++) {
      if(s[i][j] === x) {
        res.push(i);
        break;
      }
    }
  }

  return res;
}

console.log(FindWordsContaning(["leet", "code"],"e"))