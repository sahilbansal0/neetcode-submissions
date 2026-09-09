class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
  maxProfit(prices) {
   let profit = 0;
   for(let i =0; i< prices.length; i++){
     for(let j =i; j<prices.length; j++){

       if(prices[i]< prices[j]){
         profit = Math.max(profit, prices[j]-prices[i])
       }
       continue;
     }
     
   }
return profit   
 }
}
