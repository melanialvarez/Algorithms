/*
Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.

stacks

7:12
7:18

loop string
if found is openning bracket push it to stack
if it is closing bracket pop last from stack
if it is the match continue, else return false

at the end if stack still has return false

 */

function f(s) {
    var stack = [];
    var openingBrackets = {
        "[": true,
        "{": true,
        "(": true
    };

    var contraryBracket = {
        "[": "]",
        "{": "}",
        "(": ")"
    };

    for(var i=0; i<s.length; i++){
        if(openingBrackets[s[i]]){
            stack.push(s[i]);
            console.log(stack);
        }else {
            var lastBracket = stack.pop();
            if(contraryBracket[lastBracket] !== s[i]){
                return false;
            }

        }
    }
    if(stack.length>0) return false;
    return true;

}

console.log(f("([])[]({})"));