/*

9:29 - 10:00

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
Find all unique triplets in the array which gives the sum of zero.

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

Backtracking

[-1, 0, 1]

loop array and cb with current element and remining of array
current = -1
remining = [0, 1] //the next values in the array when removing current
currentResult = [-1]

cb()

    -1 + 0
        [1]
        ans = [-1, 0]
    -1 + 1
        [0,]
        ans = [-1, 1]

are 3 elements in asw?
    -1 + 0 + 1
    []
    ans = [-1, 0, 1]

     -1 + 1 +0
        []
        ans = [-1, 1, 0]

are 3 elements in asw?



continue until I have added 3 elements
        when 3 elements added:
            ask if it is equal to 0
                add that sequence to the result




 */
function cb(remining, ans, arrayAns) {//[0, 1, 2, -1, -4], [-1]
    console.log(remining, ans);
    if(ans.length === 3){
        //compute sum
        var sum = ans.reduce(function(a,b) {return a+b;});
        if(sum===0) arrayAns.push(ans);
    } else {
        for(var i=0; i<= remining.length; i++){
            cb(remining.slice(i+1), ans.concat(remining[i]), arrayAns);////[1, 2, -1, -4], [-1, 0]
        }
    }

}

function parseAns(arrayAns) {
    var ht = {};
    var newArr = [];

    arrayAns.forEach(function(e) {
        if(!ht[e.sort().join('')]){
            ht[e.sort().join('')] = true;
            newArr.push(e);
        }
    });
    return newArr;
}

function main(A) {//[-1, 0, 1, 2, -1, -4]
    var arrayAns = [];
    for(var i=0; i<= A.length; i++){
        cb(A.slice(i+1), [A[i]], arrayAns); //[0, 1, 2, -1, -4], [-1]
    }
    console.log(parseAns(arrayAns));

}

main([-1, 0, 1, 2, -1, -4]);