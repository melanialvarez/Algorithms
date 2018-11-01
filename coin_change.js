/*

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1

5:05
5:20


[1, 2, 5]
from the greatest coin
5+ 5
   2
   1

cb with just computed value
10 + 5
    2
    1

cb
if currentValue is > than amount return false
if is equal return number of coins i've used until now
15 return -1
12 return -1
11 return 3



 */
var currentSmallest = -1;
var amount = 3;

function helper(currentValue, numberOfCoins, coins, amount) {// 11, 3
    if(currentValue > amount) return false;//15 > 11
    if(currentValue === amount) {//10 == 11
        currentSmallest = currentSmallest >= 0?  Math.min(currentSmallest, numberOfCoins) : numberOfCoins;//3
        return true;
    }
    for(var i=0; i<coins.length; i++){
        helper(currentValue+ coins[i], numberOfCoins+1, coins, amount);// 15, 1
    }
}

function f() {
    var coins = [2];
    helper(0, 0, coins, amount);
    console.log(currentSmallest);

}
f();

//queue

// 2, 1
// 1, 1


// 7, 2
// 6, 2


// 12, 3
// 11, 3