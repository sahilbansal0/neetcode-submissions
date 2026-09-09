class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
  isAnagram(s, t) {
    if(s.length!==t.length){
        return false
    }
        let hash1 = {};
for(let i=0; i<s.length; i++){
    if(s[i] in hash1){
        hash1[s[i]] = hash1[s[i]]+ 1
    }
    else{
        hash1[s[i]] = 1
    }
}

for(let i=0; i<t.length;i++){
if(!hash1[t[i]]){
return false
}
hash1[t[i]]--
}
return true

    }
}
