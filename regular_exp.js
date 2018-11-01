/*
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
Example 4:

Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".
Example 5:

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false


12:29

compare one to one
Continue if
    are they the same
    is the pattern .
    is the pattern * and the previous the same letter than the string or .
    are they different letters but the next in the pattern is * (only move pointer of pattern two spaces)

 */

function getPossiblePatterns(p) {
    //mis*is*p*.
    var possiblePatterns = [];
    var numberOftimes = 0;
    for(var i=0; i<p.length; i++){
        if(p[i] === '*'){
            numberOftimes++;
            //push without
            var newPatternWith = p.slice(0, i-1).concat(p.slice(i+1));
            possiblePatterns.push(newPatternWith);
        }
    }
    if(numberOftimes > 1){
        numberOftimes--;
        possiblePatterns.forEach(function(e) {
            possiblePatterns = possiblePatterns.concat(getPossiblePatterns(e));
        });
    }
    return possiblePatterns;
}

function f(s, p) {
    var sPointer = 0;
    var pPointer = 0;

    while(s[sPointer] && p[pPointer]){
        var sVal = s[sPointer];
        var pVal = p[pPointer];
        // //console.log('compare ', sVal, 'and', pVal);

        if(sVal === pVal){
            sPointer++;
            pPointer++;
            //continue
            if(p[pPointer+1] === '*'){
                pPointer++;
            }
        } else if(pVal === '.'){
            sPointer++;
            pPointer++;
            //continue
        } else if(pVal === '*' && (p[pPointer - 1] === sVal || p[pPointer - 1] === '.')){
            //console.log('val is * and prev is', p[pPointer - 1]);
            sPointer++;
            pPointer++;
            //continue
        } else if(sVal !== pVal && p[pPointer+1] === "*"){
            //console.log('val is * and next is', p[pPointer + 1]);
            pPointer += 2;
        } else {
            return false;
        }

    }
    if(s[sPointer]){//if there is still string to compute but no pattern
        //if last items in pattern where .*
        var lastItems = p.slice(p.length-2);
        return lastItems === '.*';
    }

    if(p[pPointer]){//if there is still pattern but no string
        //continue only if all are cancellable c*a*
        var star = 0;
        var letter = 0;
        while(p[pPointer]){
            if(p[pPointer] === '*') star++;
            else letter++;
            pPointer++;
        }
        return star >= letter;
    }
    return true;
}

var s = "mississippi";
var p = "mis*is*p*.";
//ans = false;

s = "aab"
p = "c*a*b"
//ans = true


s = "ab"
p = ".*"


s = "aaa"
p = "ab*a*c*a"

//"aa*a"
//true
// //console.log(f(s, "aa*a"));

function main(s, p) {
    var res = false;
    var computedValues = {};
    var newPossiblePatterns = getPossiblePatterns(p);
    newPossiblePatterns.forEach(function(e) {
        if(!computedValues[e]){
            var r = f(s, e);
            if(r) res = true;
            return;
        }
    });
    return res;
    // //console.log(newPossiblePatterns);

}

console.log(main(s, p));
