"use strict";

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


// 1st try: failure, 200/220 test cases pass. Revist.
function maxProfit(prices) {
  let output = 0;
  let start = 0; // buy
  let end = prices.length; // sell
  while (start < prices.length) {
    if (start < end) {
      if (prices[end] - prices[start] > 0) {
        output = Math.max(output, prices[end] - prices[start]);
      }
      end--;
    } else {
      start++;
      end = prices.length;
    }
  }
  return output;
}
// I don't love this, because I think we can keep skipping indexes if it is bigger than the next but I'm not sure how to say that.
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
