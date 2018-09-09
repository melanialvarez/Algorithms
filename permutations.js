/*
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

2:24
2:55

Get each element on array and for each one callback with the other elements of array

1, [2,3]
    1,2 [3, 4]
        1,2,3, [] //return when empty

    1,3, [2]
2, [1, 3]
 */


//Edge cases
//empty array
//negative numbers? not a problem
//Can it have repeated numbers?

//(currentElement, currentAnswer, reminingArray) //reminingArray is actually the whole array but within the fn ignore if element is the same than the currentElement
var res = [];

function helper(currentAnswer, reminingArray) {//1, [], [1,2,3]
    // console.log('****', currentAnswer, reminingArray);
    if(!reminingArray.length) {
        console.log('found ', currentAnswer);
        res.push(currentAnswer);
        return currentAnswer;
    } else {
        for(var i=0; i<reminingArray.length; i++){
            var currentAnserNew = currentAnswer.concat(reminingArray[i]);
            //compute remining
            var newRemining = reminingArray.slice(0,i).concat(reminingArray.slice(i+1));//[1,2]
            console.log('call with ', currentAnserNew, newRemining);
            helper(currentAnserNew, newRemining);//[3], [1,2]
        }
    }

}
function f(A) {
    helper([], A);
}

f([1]);
console.log(res);

//queue
/*
[1], [2,3]
//[2], [1,3]
//[3], [1,2]

 */