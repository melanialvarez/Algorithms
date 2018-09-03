/*

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

9:13
9:53

Example

babad

baaabcdefghabccba

c1 = b
c2 =

//Solve how to see if an string if a palindrome?
cabac
pointers

pointer at firstElement and lastElement
while pointers are different
    move firstElement to right and lastElement to left while comparing if values are the same
    if elements are diferent return false
    when pointers are the same return true

To solve the complete problem:
Recursive call to compute all possible combinations starting with the biggest possible value

send wholeString to function

Function
isPalindrome(string)
if not palindrome send substrings
    string.slice(1)
    string.slice(0, penultimo)

 */

function isPalindrome(str){
    var left = 0;
    var right = str.length-1;
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

var masStr = '';
function helper(str, maxStr) { //abac
    console.log('computing ', str);
    if(isPalindrome(str)){
        console.log("is pal ", str);
        masStr = masStr.length > str.length? masStr : str;
        return str;
    } else {
        var s1 = helper(str.slice(1));//bac
        var s2 = helper(str.slice(0, str.length-1));//abac
        return s1 || s2;
    }

}

function longest(str) {
    var maxStr = '';
    helper(str, maxStr);
}

helper("abacca")
console.log(masStr);

// isPalindrome("acca");