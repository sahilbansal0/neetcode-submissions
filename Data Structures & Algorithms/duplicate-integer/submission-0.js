class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let res = false;
        let arr = [];
        for(let i=0; i<nums.length; i++){
if(arr.includes(nums[i])){
return true
}
arr.push(nums[i])
        }
        return res;
    }
}
