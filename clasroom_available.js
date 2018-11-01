/*
Given an array of time intervals [start, end] for classroom lectures [possibly overlapping], find the minimum number of rooms required.

For example, given [[30, 75], [0, 50], [60, 150]], you should return 2.

Draw timeline

4:19
4:34

Complexity:

From first beginning to last beginning, how many jumps are there? Switch counter

Sort all start and end times with a flag
0 s
30 s
50 e
60 s
75 e
150 e

get highest start to use as a stopper // 60

loop array and modify counter while looping [if s counter ++ : else counter--] 
    if val > highestStart return counter
 */
var A = [[30, 75], [0, 50], [60, 150], [65,200]];
// var A = [[30, 75], [0, 50], [60, 150]];

function f(A) {
    var sortedValues = [];
    var highest = 0;
    A.forEach(function(e) { //n
        highest = Math.max(highest, e[0]);
        sortedValues.push({
            val: e[0],
            type: 's'
        });

        sortedValues.push({
            val: e[1],
            type: 'e'
        });

    });

    sortedValues.sort(function(e1, e2) { //n log n
        return e1.val > e2.val;
    });

    console.log(sortedValues);
    console.log(highest);

    var counter = 0;
    for(var i=0; i< sortedValues.length; i++){//n
        if(sortedValues[i].val > highest) return counter;
        if(sortedValues[i].type === 's') counter++;
        if(sortedValues[i].type === 'e') counter--;
    }
    return counter;
}

console.log('ans ', f(A));