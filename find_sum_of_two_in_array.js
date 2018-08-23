/*
* Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

//Sol: O(n2)

//Example:
//[10, 15, 3, 7]  k = 17 -> true (10+7)

function sum(arr, k){
    for(var i=0; i< arr.length; i++){
        for(var j=i+1; j< arr.length; j++){
            if(arr[i] + arr[j] === k) return true;
        }
    }
    return false;
}

console.log(sum([10, 15, 3, 7], 19));