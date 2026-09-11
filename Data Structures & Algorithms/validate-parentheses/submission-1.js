class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
let map ={
    "{":"}",
    "(":")",
    "[":"]"
};

let arr = [];

for(let i =0; i<s.length;i++){
    if(s[i]==="{" || s[i]=="[" || s[i]==="("){
        arr.push(s[i])
    }
    else{
        const pop = arr.pop();
        if(map[pop]===s[i]){
            continue
        }
        else{
            return false
        }
    }
}
return arr.length===0
    }
}
