/*

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
11:21
11:35



[1,3, 5]
[2, 4, 6]
ans: 3.5


sol

sort in one single array
if length is even return the sum/2
if length is odd return middle element


how to sort in single array?
pointers

 [1,3, 5]
[2, 4, 5,  6, 7]

[1, 2, 3, 4, 5, ]

pointer to firstElement of each array
if no pointer to any element
    continue adding other elements
add smaller to new array and move that pointer one to the right

 */

function sortArray(A, B) {
    var aPointer = 0;
    var bPointer = 0;
    var newArray = [];

    while(A[aPointer] !== undefined && B[bPointer] !== undefined){
        if(A[aPointer] < B[bPointer]){
            newArray.push(A[aPointer]);
            aPointer++;
        } else {
            newArray.push(B[bPointer]);
            bPointer++;
        }

        if(bPointer !== undefined){
            newArray.concat(B.slice(bPointer));
        }

        if(aPointer !== undefined){
            newArray.concat(A.slice(aPointer));
        }
    }
    return newArray;
}

function f(A, B) {
    var sortedArray = sortArray(A, B);
    console.log(sortedArray);
    if (sortedArray.length % 2 === 0){//even
        var middle = sortedArray.length / 2;
        return (sortedArray[middle] + sortedArray[middle-1]) / 2;
    } else {
        var middle = Math.floor(sortedArray.length / 2);
        return sortedArray[middle];
    }
}

console.log(f([1,3, 5], [2, 4]));