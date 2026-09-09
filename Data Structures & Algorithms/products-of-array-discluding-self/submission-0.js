class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
 productExceptSelf(nums) {
   let prefixArray = []
   let postfixArray = []
   let product = [];
   let num = 1;

for(let i =0; i<nums.length; i++){
  num  = num * nums[i];
  prefixArray[i]= num
}
   num =1

for(let i =nums.length-1; i>=0; i--){
  num  = num * nums[i];
  postfixArray[i] = num
}

for(let i =0; i<nums.length; i++){

  if(i===0){
    product[i] = postfixArray[i+1]

  }
  else if(i==nums.length-1){
        product[i] = prefixArray[i-1]

  }
  else{
    product[i] = prefixArray[i-1]  * postfixArray[i+1]

  }
}

   return product
        
}
}
