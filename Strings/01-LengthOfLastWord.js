function lengthoflastword(s) {
  let n = s.length-1;
while(n>=0) {
  if(s[n] !== " ")  {
    break;
  }else {
    n--;
  }


      }


let count = 0;
while(n>=0) {
  if(s[n] !== " ") {
    count++;
    n--;
  }else {
    break;
  }
}

return count;
}



console.log(lengthoflastword("leet  code"))