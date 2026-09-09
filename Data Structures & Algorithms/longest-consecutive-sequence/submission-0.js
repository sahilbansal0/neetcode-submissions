class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
      let longest = 0
     for(let elem of set){
        let length = 0;
        if(!set.has(elem-1)){
            let element = elem;
            length = 1;

            while(set.has(element+1)){
                element++
                length++
            }

        }
        longest = Math.max(longest, length)
      }
return longest
    }
}
