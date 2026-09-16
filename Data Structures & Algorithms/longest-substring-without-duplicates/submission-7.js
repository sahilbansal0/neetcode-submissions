class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
 let i =0;
let j =i;
let maxLength = 0;
let map = {};

while(j<s.length){
    map[s[j]] = map[s[j]] ? map[s[j]]+1 : 1
  while(map[s[j]]> 1){
        map[s[i]]--
        i++;
 
  }
  maxLength =  Math.max(maxLength, j -i+1 );
  j++
}
return maxLength
    }
}
