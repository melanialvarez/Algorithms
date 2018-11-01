/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers.
You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

2:24

pointers until there is an endPointer
startPointer at first element
endPointer at startPointer + 2
add tree values
    update closestToTarget
    startPointer++
    endPointer++


how to update closest
if sum +
sum - target < prevSum - target;

if sum -
target + abs(sum) < prevSum - target;//-1 - 2 = -3

 */

function f(A, target) {
    var firstPointer = 0;
    var endPointer = 2;
    var closestTarget = undefined;
    var difference = undefined;

    while(A[endPointer] != undefined){
        var sum = A[firstPointer] + A[firstPointer+1] + A[endPointer];
        console.log(sum);
        var currentDifference;

        if(sum<0){
            currentDifference = target + Math.abs(sum);
        } else {
            currentDifference = Math.abs(sum - target);
        }

        if(currentDifference <= difference || difference === undefined){
            difference = currentDifference;
            closestTarget = sum;
        }
        firstPointer++;
        endPointer++;

    }
    return closestTarget || 0;
}

console.log(f([1,1,-1,-1,3], 3));