/*

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".


3:41
4:06

"abcba"

iP = b
mP = a
counter = 1
numFoundElements = 1
foundElements = {b, a}

save from a to b [ab, bcb, cb, ]
reset

start form first element
save how many different characters I've found
continue until diffCharsFound > k (ask first)
    when that happens:
        return the current substring (with pointers)
        reset counter to 0
        move initialPointer to the right
        move movingPointer to the initialPointer


 */

function f(A, k) {//"abcba" , 4
    var iP = 0;
    var mP = 0;
    var foundDifferent = {};
    var counter = 0;//holds number of different items found
    var currentGreatest = '';

    while(A[mP]){//a
        var currentElement = A[mP];//a
        if(!foundDifferent[currentElement]){
            if(counter+1 <= k){ //there is still space //2<=2
                foundDifferent[currentElement] = true;//{b, c}
                counter ++;//2
                mP++;//3
                console.log(foundDifferent);
            } else {//counter would be greater, save answer

                var currentString = A.slice(iP, mP);//1,4 bcb
                if(currentString.length > currentGreatest.length){
                    currentGreatest = currentString;//bcb
                }
                iP++;//2
                mP = iP;//2
                foundDifferent = {};
                counter = 0;
            }

        } else {
            mP++;//4
        }

    }

    var currentString = A.slice(iP, mP);//1,4 bcb
    if(currentString.length > currentGreatest.length){
        currentGreatest = currentString;//bcb
    }
    return currentGreatest;
}

console.log(f("abcbbba", 3));
