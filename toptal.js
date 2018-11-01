// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
var n;
var result = "";

function helper(currentL, currentR, currentString){
    // console.log(currentL, currentR);
    var newL = 2*currentL - currentR;
    var newR = 2*currentR - currentL;

    if(newL==n){
        result = currentString + "L";
        return;
    }

    if(newR==n){
        result = currentString + "R";
        return;
    }

    // console.log("voy por L con", currentL, currentR);
    if(newL> Math.abs(n)*-1) helper(newL, currentR, currentString+ "L");
    // console.log("voy por R con", currentL, newR);
    if(newR< Math.abs(n)) helper(currentL, newR, currentString+ "R");

}
function solutionLR(N) {
    n = N;
    helper(0,1, "");
    console.log(result);

}
solutionLR(-11);



///////

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var changes = [];
    for(var i=0; i<A.length; i++){
        if(A[i]< A[i+1]){
            changes.push("+")
        } else if(A[i] === A[i+1]) {
            changes.push("=");
        } else {
            changes.push("-");
        }
    }
    // console.log(changes);

    var counter = 0;
    var maxCounter = 0;

    for(var j=0; j<changes.length-1; j++){
        if(changes[j] != changes[j+1] && changes[j] != "=" && changes[j+1] != "="){
            // console.log('different ',j);
            counter++;
        }else{
            maxCounter = Math.max(maxCounter, counter);
            counter = 0;
        }
    }
    maxCounter = Math.max(maxCounter, counter);
    console.log(maxCounter + 2);
}


/////
