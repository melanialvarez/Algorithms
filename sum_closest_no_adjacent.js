/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers.
You may assume that each input would have exactly one solution.

Example:

4:26

Recursive

[-1, 2, 1, -4] target=1 ans= 2

get first element
with that firstElement cb to add to remining elements
with that new computed sum cb with remining elements
stop when 3 elements have been added and return best fit

cb(currentSum, [computedIndexes] , computedTimes, A, target) // -1+2, [0, 1] , 2
if(computedTimes >= 3)
    We have a result
    currentDiference = abs(currentSum - target);
    return {dif: currentDiference, ans: currentSum}
loop A
    if i not in computedIndexes
        sum currentSum with A[i] and cb(newCurrentSum, [computedIndexes and i], computedTimes+1, A) // -1+2+1, [0, 1, 2] , 3


-1
    + 2 = 1
            + 1 = 2
            + - 4 = -3
    + 1
    + -4


What is the best fit?
the closest to target
-2 -1 0 1 2 3

abs(currentAnswer - target) target=-1, curr = 2. 2 - (-1) = 3
target=2, curr = -2. -2 - 2 = 4

 */

function f(currentSum, computedIndexes, computedTimes, A, target) {
    // console.log(computedIndexes, currentSum);
    if(computedTimes >= 3){
        var currentDifference = Math.abs(currentSum - target);
        return {'dif': currentDifference, 'ans': currentSum};
    }
    var result = {};
    for(var i=0; i<A.length; i++){
        if(!computedIndexes.includes(i)){
            var newCurrentSum = currentSum+A[i];
            var currentResult = f(newCurrentSum, computedIndexes.concat(i), computedTimes+1, A, target);
            if(currentResult.dif < result.dif || result.dif === undefined){
                result = currentResult;
                // console.log('new smallest ', currentResult, result);
            }
        }
    }
    return result;

}

function f1(A, target) {
    var res = {};
    for(var i=0; i<A.length; i++){
        var currentResult = f(A[i], [i], 1, A, target);
        if(currentResult.dif < res.dif || res.dif === undefined){
            res = currentResult;
        }
    }
    return res.ans;
}


console.log(f1([-1, 2, 1, -4], 2));