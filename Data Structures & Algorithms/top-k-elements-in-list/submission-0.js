class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
   topKFrequent(nums, k) {

let map ={};
  let buckets = []
  let results = []
  for(let i =0; i< nums.length; i++){
    map[nums[i]] = map[nums[i]] ? map[nums[i]]+1 :1
    buckets[i+1] = [];
  }
  for(let key in map){
    let frequency = map[key];
    buckets[frequency].push(key)
    
    
  } 
  const bucketsArray = buckets.flat();
  console.log(bucketsArray)
  for(let i = 0; i<k; i++){
    results.push(bucketsArray[bucketsArray.length-1-i])
  }
  return results
    }

}
