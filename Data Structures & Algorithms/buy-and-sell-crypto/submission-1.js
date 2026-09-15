class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let a = prices;
let min = a[0];
let i =0;
let j =i+1;
let profit = 0;



while(i<j && j<a.length){
  if(a[i] < min){
    min = a[i]
  }

 profit =  Math.max(profit, a[j]- min)
  i++;
  j = i+1
}
return profit
    }
}
