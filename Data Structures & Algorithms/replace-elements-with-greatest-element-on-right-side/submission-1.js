class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
let g = -1;
for(let i=arr.length-1; i>=0; i--){
let temp = arr[i];
arr[i] = g;

if(temp> g ){
    g = temp
}

     }
     return arr
    }
}
