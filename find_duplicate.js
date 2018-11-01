/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]



4:07
4:12


loop A and save in a ht the number of times a number appears
loop ht and add to result only the ones with value 2

4: 1
3: 2
2: 2
7:1
8:1
1: 1

3, 2

 */

function f(A) {
    var ht = {};
    for(var i=0; i<A.length; i++){
        var currentElement = A[i];
        ht[currentElement] = ht[currentElement]? ht[currentElement]+1 : 1;
    }

    var res =[];
    for(var key in ht){
        if(ht[key] === 2){
            res.push(key);
        }
    }
    return res;
}

console.log(f([4,3,2,7,8,2,3,1]));