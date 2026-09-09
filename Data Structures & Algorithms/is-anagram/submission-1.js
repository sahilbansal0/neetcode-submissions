class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
           if(s.length!==t.length) return false;
   let map = {};
   
   for(let i =0 ; i<s.length; i++){
     map[s[i]] = (map[s[i]] || 0) + 1
   }

     for(let i =0 ; i<t.length; i++){
       if(t[i] in map &&  map[t[i]]>0){
         map[t[i]] = map[t[i]]-1
       }
       else{
                return false

       }
     
   }
   return true   
    }
}
