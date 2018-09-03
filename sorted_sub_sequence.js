/*
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

Return true if there exists i, j, k
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

Example 1:

Input: [1,2,3,4,5]
Output: true

3:38
3:47

Example
Use pointers

[1,2,3,4,5]

set startPointer to first element [0] i
set endPointer to third element [2] i+2

loop from 0 < length - 2
compare i, i+1, i+2
if there is a correct subsecuence return true
else continue with loop

[1,8,3,4,5]
i=2
3<4<5

 */


function f(A) {
    for(var i=0; i<A.length-2; i++){
        if(A[i] <= A[i+1] && A[i+1] <= A[i+2]){
            return true;
        }
    }
    return false;
}

console.log(f([1, 1, 1, 1]));