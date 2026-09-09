class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map ={};
        for(let i=0; i<nums.length; i++){
            let num = target - nums[i]

            if(num in map){
                return [i, map[num]]
            }
            map[nums[i]] = i
        }
    }
}
