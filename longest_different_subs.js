/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", which the length is 3.


Solution: pointers

abcadtd

set firstPointer to element 0 //a
push firstPointer to HT //{a}
set lastPointer to second element //b

loop while lastPointer

    if lastPointer not found in HT
        save  lastPointer to HT //{b, c, a, d, t}
        move lastPointer one to the right and loop again //a

   if lastPointer found
        get length of string (lastPointer - firstPointer) 2-0 = 3
        if the length is > than the previeusly found, save new substring //save: abc
        clear HT // {}
        move firstPointer one to the right //b
        save first pointer in HT //{b}
        move lastPointer = firstPointer + 1 and loop //c

   get length of string (lastPointer - firstPointer) 2-0 + 1 = 3
   if the length is > than the previeusly found, save new substring

   RETURN result
 */

function f(A) {
    //Set first values
    var firstPointer = 0;
    var lastPointer = 1;
    var ht ={};
    var res = '';
    ht[A[firstPointer]] = true;

    while(A[lastPointer]){
        if(!ht[A[lastPointer]]){
            // console.log('add ', ht, lastPointer);
            ht[A[lastPointer]] = true;
            lastPointer++;
        } else{
            // console.log(ht);
            var size = lastPointer - firstPointer;
            if(res.length < size){
                // console.log('replace ', ht);
                res = A.slice(firstPointer, lastPointer);
            }
            ht = {};
            firstPointer++;
            lastPointer = firstPointer+1;
            ht[A[firstPointer]] = true;

        }
    }

    var size = lastPointer - firstPointer;
    if(res.length < size){
        // console.log('replace ', ht);
        res = A.slice(firstPointer, lastPointer);
    }
    return res.join('');
}


console.log(f(['a', 'b', 'c', 'a', 'd', 't', 'd']));