class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b);
        const result = [];
        let target = 0

        for(let i=0; i<nums.length-2; i++){
            let j = i+1;
            let k = nums.length-1;

            if(nums[i]===nums[i-1] && i>0){
                continue;
            }

            while(j<k){
            let sum = nums[i] + nums[j] + nums[k];
                if(sum===target){
                    result.push([nums[i], nums[j], nums[k]]);

                    while(j<k && nums[j]===nums[j+1]){
                        j++
                    }

                    while(k>j && nums[k]===nums[k-1]){
                        k--
                    }

                    j++
                    k--
                }
                else if(sum < target){
                    j++
                }
                else{
                    k--
                }

            }


        }
       return result

    }
}
