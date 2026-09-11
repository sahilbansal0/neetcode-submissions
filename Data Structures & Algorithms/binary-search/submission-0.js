class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let i = 0;
        let j = nums.length - 1

        while (i <= j) {
            let mid = Math.floor((i + j) / 2);
            let elem = nums[mid];

            if (target === nums[mid]) {
                return mid
            }

            else if (target < elem) {
                j = mid - 1
            }
            else {
                i = mid + 1
            }
        }

        return -1


    }
}
