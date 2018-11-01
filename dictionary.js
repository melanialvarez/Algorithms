/*
Given a dictionary of words and a string made up of those words (no spaces),
return the original sentence in a list. If there is more than one possible reconstruction,
return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox",
you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond",
return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].


4:13
4:40

bed bathandbeyond
'bed','bedbath', 'and', 'beyond'

bed bath andbeyond
'bed','bathandbeyond',


start making substrings of the string with startPointer and endPointer
ask if that substring is in the list
if so
    move startPointer to endPointer+1
    move endPointer to endPointer+2
    if you finish the whole string and always find the substring return true


    startPointer = 0
    endPointer = 1
    found = false;
    var res = [];

    while(letter at endPointer)
        newWord = substring between startPointer and endPointer
        if newWord is found in array
            found = true;
            add newWord to res
          move startPointer to endPointer+1
          move endPointer to endPointer+2

       if not found
       found = false;
        move endPointer to right

    if(found) return the result //Todo:how to get the result
    if not found
        two options:
            there is no answer
            the prev found is not the correct one (remove previously fond word) and cb with new array

 */

function helper(s, A) {
    var startPointer = 0
    var endPointer = 1
    var found = false;
    var res = [];

    while(s[endPointer]){
        var newWord = s.slice(startPointer, endPointer+1);
        if(A.includes(newWord)){
            found = true;
            res.push(newWord);
            startPointer = endPointer+1;
            endPointer = endPointer + 2;
        } else {
            found = false;
            endPointer++;
        }
    }

    if(found) return res;

    var lastElementFound = res[res.length-1];
    var newA = A.filter(function(e) {
        return e !== lastElementFound;
    });
    if(newA.length){
        return helper(s, newA);
    } else {
        console.log('no answer for this');
        return null;
    }
}

console.log(helper('bedbathandbeyond', ['bed','bedbath', 'and', 'beyond']))
console.log(helper('bedbathandbeyond', ['bed','bath', 'and', 'beyond']))
console.log(helper('bedbathandbeyond', ['bed','bath', 'and', 'bathandbeyond']))
console.log(helper('bedbathandbeyond', ['bed','bath', 'and']))