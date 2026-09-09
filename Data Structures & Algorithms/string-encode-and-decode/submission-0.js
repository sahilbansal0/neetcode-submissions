class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      let string ="";

      for(let i=0; i<strs.length; i++){
        let str = strs[i];
        string+= str.length + "#" + str
        
        
      }
      console.log(string)
      return string
      
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
decode(str) {
      let i =0;
      let result =[];

      while(i<str.length){
        let j =i

        while(str[j]!=="#"){
          j++
        }
        let length = Number(str.slice(i, j))
        console.log(length)
        i = j+1
        console.log(i, i+length)
        let word = str.slice(i, i+length)
        result.push(word)
        console.log(word,"sss")
        i = i+length

        
      }
return result
      
    }
}
