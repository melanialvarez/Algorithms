/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.


             4:48
             5:09

Questions:
What if the number goes beyond the last index?


Pointers
[2,3,1,1,4]

get value of currentItem (2)
move pointer currentItem times to the right
if there is a number, repeat

if not a number (undefined) return true //this means we are beyond the end of array
if number is cero and I am not at the end of the array, return false


Edge cases:
empty?
only cero element?

 */

function f(A) {
    var pointer = 0;
    if(A.length === 0) return false;

    while(A[pointer] != undefined){//[2,0]
        if(pointer >= A.length-1) return true;
        if(A[pointer] === 0) return false;
        var currentValue = A[pointer];//2
        pointer+= currentValue; // 2 -> und
    }
    return true;

}

console.log(f([2, 0]));