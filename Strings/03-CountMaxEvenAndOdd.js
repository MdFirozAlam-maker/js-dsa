function CountingFrequency(s) {
  let map = {};
  for(let i=0;i<s.length;i++) {
    map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
  }

  let vowel = ['a', 'e', 'i', 'o', 'u'];
  let maxVowel = 0;
  let maxConsonant = 0;

  let mapkeys = Object.keys(map);
  for(let i=0;i<mapkeys.length;i++) {
    if(vowel.includes(mapkeys[i])){
      maxVowel = Math.max(maxVowel, map[mapkeys[i]])
    }else {
      maxConsonant = Math.max(maxConsonant, map[mapkeys[i]])
    }
  }

  return maxVowel + maxConsonant;
  

  
}

console.log(CountingFrequency("successes"))