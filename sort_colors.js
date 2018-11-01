/*
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

0 red
1 white
2 blue

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

10:24
11:20


 */

function quickSort(A, start, end) {
    if(start >= end) return;

    var pivotIndex = Math.floor((start+end)/2);
    var pivot = A[pivotIndex];

    var leftPointer = start;
    var rightPointer = end;

    while(leftPointer <= rightPointer){

        while(A[leftPointer] < pivot){
            leftPointer++;
        }
        while(A[rightPointer]> pivot){
            rightPointer--;
        }

        if(leftPointer <= rightPointer){
            //swap
            var temp = A[leftPointer];
            A[leftPointer] = A[rightPointer];
            A[rightPointer] = temp;
            leftPointer++;
            rightPointer--;
        }

    }


    var middle = Math.floor((start+end) /2);

    quickSort(A, start, middle);
    quickSort(A, middle+1, end);
    return A;

}

console.log(quickSort([0,2,1], 0, 2));