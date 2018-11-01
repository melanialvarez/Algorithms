/*
*
*
* [2, 3, 1, 2]//3, 2
* t = 6
* true
*
* set initialPointer at 0
* set finalPointer at 1
*
*
* loop
* add prevVal with val at finalPointer
* if sum > target
*   take out initialPointer
*   move InitialPointer to right
* if sum === target
*   return true
*
* //continue adding numbers
* finalPointer++;
* */

function f(A, target) {
    var initialPointer = 0;
    var finalPointer = 1;
    var currentVal = A[initialPointer];

    while(A[finalPointer]){
        currentVal += A[finalPointer];
        if(currentVal > target){
            currentVal -= A[initialPointer];
            initialPointer++;
        }
        if(currentVal === target) return true;
        finalPointer++;
    }

    return false;
}

console.log(f([2, 3, 1, 2], 7));