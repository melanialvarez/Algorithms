/*
*  Compute the max value of a subarray gotten from an array containing k elements
* e.g.
* k = 2
* [5 , 2 , -1 , 0 , 3]
* Ans: 7 because of [5, 2]
*
* 8:53
* 9:05
*
*
* Compute firstValue sum 5+2
* From the remaining elements
*   sum the k element
*   substract the first element of the previews
*   if computedValue > maxValue: substitute
*
* */

function window_sliding(A, k) {

    //compute first value
    var maxVal = 0;
    for(var i=0; i<k; i++){
        maxVal+= A[i];
    }

    //Compute rest of the values
    var currentVal = maxVal;
    for(var i=k; i<A.length; i++){
        currentVal= currentVal + A[i] - A[i-k];
        maxVal = Math.max(currentVal, maxVal);
    }
    return maxVal;

}

console.log(window_sliding([5 , 2 , -1 , 8 , 3], 2));