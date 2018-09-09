/*
Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

8:49
9:10

Recursive approach

get first number and add it to all the non adjacent numbers
callback with that computedNumber and the array of non adjacents of the just added number

Do the same for second number, third...

Example

[2, 4, 6, 2, 5]

2+6 = 8
cb(8, [5])

4+2 = 6
cb(6, [])


[5, 1, 1, 5]

5+1 = 6
cb(6, [])

 */
var max = 0;

function helper(current, A) {//5, [1,5]
    // console.log(current, A);
    if(!A.length) {
        // console.log('sum ', current);
        max = Math.max(max, current);
        return current;
    }
    else if(A.length === 1){
        current+= A[0];
        // console.log('sum ', current);
        max = Math.max(max, current);
        return current;
    }

    else {
        for(var j=0; j<A.length; j++){
            // console.log(j, A[j]);
            // console.log('call with ', current, '+', A[j]);
            helper(current+A[j], A.slice(j+2));
        }
    }

}

function f(A) {
    for(var i=0; i< A.length; i++){
        helper(A[i], A.slice(i+2));//5, [1,5] * 1, [5],
    }


}

f([5, 1, 1, 5]);
console.log(max);