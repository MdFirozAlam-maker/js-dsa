
//Best  Time to Buy and Sell Stocks
//Platform: Leetcode
//Link: https://leetcode.com/submissions/detail/1991585066/
const prices = [7, 1, 5, 3, 6, 4];

function BestTimeToBuyAndSellStock(prices) {
  let buy = prices[0];
  let sell = prices[0];
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    let profit = prices[i] - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
      buy = minPrice;
      sell = prices[i];
    }
  }
  return { buy, sell, maxProfit };
}

console.log(BestTimeToBuyAndSellStock(prices));
