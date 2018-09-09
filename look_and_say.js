/*
Question 2: Look and Say
Implement a function that outputs the Look and Say sequence:
1
11
21
1211
111221
312211
13112221
1113213211
31131211131221
13211311123113112211

4:27
4:46

[1]

split array in different elements
for Each subarray add to result length+element

//split array
set a firstElement
loop and compare i with i+1
when they are different push from firstElement to i
firstElement = i+1
i = i+1;

 */

function splitString(s) {
    var r = [];
    var fe = 0;
    for(var i=0; i<s.length; i++){
        if(s[i] != s[i+1]){
            r.push(s.slice(fe, i+1));
            fe = i+1;
            // i = i+1;
        }
    }
    return r;

};
function f(s) {
    var a = splitString(s);
    var r = '';
    for(var i=0; i<a.length; i++){
        r+= a[i].length + a[i][0];
    }
    return r;

}

// console.log(splitString("1211"));
console.log(f("1"));