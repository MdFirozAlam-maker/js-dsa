function Split(s) {
  let balance = 0;
  let Rcount = 0;
  let Lcount = 0;
  for(let i=0;i<s.length;i++) {
      if(s[i] === 'R') {
        Rcount++;
      }else {
        Lcount++;
      }

      if(Rcount === Lcount) {
        balance++;
      }
  }
};

Split("RLRRLLRLRL")


 


