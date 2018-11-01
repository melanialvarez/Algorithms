/*

5:39

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
Example 2:

Input: 4
Output: "IV"
Example 3:

Input: 9
Output: "IX"
Example 4:

Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC


Substraction
1994 / 1000 = 1.X if result >= 1 then add that symbol only if substraction is diff than 1.8 or 4//Add M
otherwise add greater symbol with the substraction of its opposite

then with remining 994 do the same for next symbol
994/500 = 1.X Same //Add D


Example
1994 / 1000 = 1.X //M
rem = 994
994/500 = 1.988 > 1.8 => substract//MCM
rem = 94
94/50 = 1.88 > 1.8 => substract // MCMXC
rem = 4
4/1 = 4 >= 4 => substract //MCMXCIV


Example
1994 starts with 9 or 4?
    if so: apply rule
    if not: add first value equivalent //M

remove first element
994 starts with 9 or 4?
    if so: // MCM

remove first
94 starts with 9 or 4?
    if so: //MCMXC

remove
4 starts with 9 or 4
    if so://MCMXCIV

Donc
Avoir un dictionaire avec tous les values:
1,5,10,50100,500,1000 y
4,9,40,90,400,900

get first element of given number
    convert to string get first element //950
    if 9 or 4
        find out the decimals
            get length of string
                if 2 then nothing
                if 2 then multiply * 10
                if 3 then multiply *  100
                add result from dictionary //MCM
                get remining // 950%500 = 50
                cb with remining if > 0

     else //1
        number / nearest smallest value from dictionary // 1950/1000=1  //M
        append result times that symbol
        number % nearest smallest value from dictionary // 1950%1000=950
            if result > 0 cb with that number //200
 */

function getNearest(n, D) {//600
    console.log('for n ', n);
    var currentNearest = 1;
    for(var key in D){
        // console.log('ans', n/key);
        if((parseInt(n)/key) < 1){
            // console.log('n<0', n/key);
            return currentNearest;
        } else {
            // console.log('curr', key);
            currentNearest = key;
        }

    }
    console.log('found cn ', currentNearest);
    return currentNearest;
}

function getRemining(n, D) {//650
    var nearest = getNearest(n, D);//500
    return n%nearest;
}

function f(n, res, D) {

    console.log(n, res);
    var nString = n.toString();
    if(nString[0] === 9 || nString[0] === 4){
        //find out decimals
        var currentVal = parseInt(nString[0]);
        var l = nString.length;
        for(var i=0; i<l; i++){
            currentVal*10;
        }
        res += D[currentVal];
    } else {//8
        var nearest = getNearest(n, D);//5
        console.log(nearest);//5
        var currentValue = Math.floor(n/nearest);//1
        for(var i=0; i<currentValue; i++){
            console.log('append', D[nearest]);
            res += D[nearest];
        }

    }
    //get remining
    var remining = getRemining(n, D);
    if(remining>0) return f(remining, res, D);
    return res;
}

var res = "";
var D = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
    4: "IV",
    9: 'IX',
    40: 'XL',
    90: 'XC',
    400: 'DC',
    900: 'CM'
};

console.log(f(19, res, D));
console.log(f(1994, res, D));