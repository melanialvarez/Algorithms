/*

Backtracking

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

12:42
1:03

map all numbers to letters

2 = [a,b,c]
3 = [d,e,f]

for each element of the first number send it and send the rest of the array

(a, 34)
for each in array of 3 [d,e,f]

(ad, '')

when no more remining
return

 */

function helper(n, remining, ht, currentString) {//2
    // , 3, a

    console.log(n, remining, currentString);
    if(!remining){
        console.log('found ', currentString);
    } else {
        var currentSetOfLetter = ht[remining[0]];
        for(var i=0; i<currentSetOfLetter.length; i++){
            helper(remining[0], remining.slice(1), ht, currentString + currentSetOfLetter[i])//ad, 4 / ae, 4
        }
    }

}

function f(numbers) {
    if(!numbers) return false;
    var ht = {
        1: [''],
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }

    var n = numbers[0];
    if(n == "1"){
        n = numbers[1];
        numbers = numbers.slice(1);
    }

    var selectedNumber = n[i];
    var currentSetOfLetter = ht[n];



    for(var i=0; i< currentSetOfLetter.length; i++){
        helper(n, numbers.slice(1), ht, currentSetOfLetter[i]); //2, 34, a
    }

}

//edge cases
//what if there is a 1?
//empty string?

console.log(f("212"));