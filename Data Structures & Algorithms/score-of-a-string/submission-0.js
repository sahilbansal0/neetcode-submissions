class Solution {
   scoreOfString(str) {
        let s = 0;
for(let i=0; i< str.length - 1; i++){
    let sum =  Number(str.charCodeAt(i+1)) - Number(str.charCodeAt(i));
    if(sum < 0){
        sum*= -1
    }
s+= sum
}
return s
    }
}
