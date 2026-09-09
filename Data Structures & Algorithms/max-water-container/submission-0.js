class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i =0;
        let j = heights.length-1
        let mostWater = 0;

        while(i<j){
            let height = Math.min(heights[i], heights[j]);
            let width = j-i;
            let area = height * width;
            mostWater = Math.max(area, mostWater)
           

             if(heights[i]< heights[j]){
                i++
             }
             else{
                j--
             }

        }

return mostWater
    }
}
