class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map ={};
        for(let i =0; i<strs.length; i++){
            let str = strs[i];
            let list = new Array(26).fill(0);
            for(let j=0; j<str.length; j++){
               let charIndex = str[j].charCodeAt(0)-97;
               list[charIndex]++
            }
            const key = list.join("#");
            map[key] = map[key] ? [...map[key], str]: [str]

        }
        return Object.values(map)
    }
}
