function ValidPalindrome(s) {
  s = s.toLowerCase();
  let filterString = "";
  for(let i=0;i<s.length;i++) {
    if(s[i].match(/[a-z0-9]/i)) {
      // filterString += s[i];
      filterString = filterString + s[i];
    }
  }

  let reverse = filterString.split("").reverse().join("");
  return reverse === filterString ? true : false;
}

console.log(ValidPalindrome("A man, a plan, a canal: Panama"));