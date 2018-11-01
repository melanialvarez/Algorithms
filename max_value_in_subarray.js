/*
Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

10 = max(10, 5, 2)
7 = max(5, 2, 7)
8 = max(2, 7, 8)
8 = max(7, 8, 7)


5:08
5:17

 [10, 5, 2, 7, 8, 7]

 loop array from 0 to length - k
 compare from i to k-1
 print max


 */

function f(A, k) {//[10, 5, 2, 7, 8, 7], 3
    for(var i=0; i<= A.length-k; i++){//3, 3,
        var max = 0;
        for(var j=i; j<i+k; j++){//3, j<6,
            max = Math.max(max, A[j]);// 10
        }
        console.log(max);//10, 7, 8, 8
    }
}

f([10, 5, 2, 7, 8, 7], 3);

