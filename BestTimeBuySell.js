"use strict";

/* You are given an array prices where prices[i] is the
price of a given stock on
the ith day.

You want to maximize your profit by choosing a single day to
buy one stock and choosing a different day in the future to
sell that stock.

Return the maximum profit you can achieve from this
transaction. If you cannot achieve any profit, return 0. */

/* Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit =
6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must
buy before you sell. */

/* Time O(n) SPace O(1) */
function maxProfit(prices) {
  // current day holder
  let cur = 0;
  // next day holder
  let next = 1;
  // total profit
  let totalProfit = 0;

  // while first day is less than length
  while (cur < prices.length - 1) {
    // compare first day to the next, if next is lower
    if (prices[cur] >= prices[next]) {
      // first day ++
      cur = next;
      // next = first day + 1
      next = cur + 1;
      continue;
    }
    // if total profit is less than next - curr
    totalProfit =
      totalProfit < prices[next] - prices[cur]
        ? // total profit = next - cur
          prices[next] - prices[cur]
        : totalProfit;

    if (next === prices.length - 1) {
      cur++;
      next = cur + 1;
    } else {
      next++;
    }
  }
  // return total profit
  return totalProfit;
}



/* Refactor w/ sliding window */

function maxProfit2(prices)  {
  let [left, right, max] = [0,1,0];

  while (right < prices.length) {
    const canSlide = prices[right] <= prices[left];
    if (canSlide) left = right;

    const window = prices[right] - prices[left];

    max = Math.max(max, window);
    right++;
  }
  return max;
}

maxProfit2([7, 1, 5, 3, 6, 4]);