/*

Given an array of characters, compress it in-place.

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.


Follow up:
Could you solve it using only O(1) extra space?


Example 1:

Input:
["a","a","b","b","c","c","c"]

Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

["a","b","b","b","b","b","b","b","b","b","b","b","b"]

4:15
4:34

loop A
set p1 and p2
loop until p1 exists
1 - if elements are equal
    there should be a compression
        counter = 2;
        I don't care anymore about a's
        move p2 until element is different
            count ++
            therefore result + number of elements in counter + 1 (this one is the actual elemnt) //e.g. e12
        reset p1 and p2 to correct value
            p1= p2
            p2 = p1+1
            go back to step 1
     if not equal
        add 1 to result
        reset p1 and p2 to correct value
            p1= p2
            p2 = p1+1
            go back to step 1
 */

function f(A) {
    var p1 = 0;
    var p2 = 1;
    var res = 0;

    while(A[p1]){
        if(A[p1] === A[p2]){
            //compress
            var counter = 2;
            while(A[p1] === A[p2]){
                counter++;
                p2++;
            }
            res += counter.toString().length + 1;
        } else {
            res++;
        }

        //Reset
        p1 = p2;
        p2 = p1+1;
    }
    return res;
}

console.log(f(["a","b","b","b","b","b","b","b","b","b","b","b","b"] ));
console.log(f(["a","a","b","b","c","c","c"]));
console.log(f(["a"]));
console.log(f(["a", "b"]));
console.log(f(["a", "b", "b"]));

