/*
*
* Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

1=a
2=b
3=c
…
z=26

Started: 5:05
Finished: 5:43

111
aaa, ka, ak

1,1,1
1, 11
11, 1

the biggest two digit number I can have is 26

1,1,1
//find all combinations of two digits


currentElement + combinations(reminingElements)

base cases
// currentElement, [1,2]
//currentElement []

fn(remining, resultArray) /
if(starts with 0) return;
if(remining is empty) return;
	cb(remining.slice(1), resultArray.concat(resultArray[0])
	if there are next two elements in remining and those are < 26
		cb(reminint.slice(2), res.concat(nextTwoItemsInRemining)


forEach of the generated arrays I will turn them on strings


queue

[2,1,3], [1]

 // [], [12, 13]
 // [], [1, 21, 3]
 // [], [12, 1, 3]

Edge cases
empty array
only one item
item with 0

*
* */

var res = [];
function helper(remining, result){
    if(remining[0] === 0) return;
    if(remining.length <= 0) {
        res.push(result);
        return;
    };

    helper(remining.slice(1), result.concat(remining[0]));
    if(remining.length>=2 && remining.slice(0,2).join('') <= "26"){
        helper(remining.slice(2), result.concat(remining[0]+remining[1]));
    }
}

function char_number(number){
    var htMapping = {
        1: "a",
        2: "b",
    }

    helper(number.toString().split(''), []);
    console.log(res);
    console.log(res.length);

}

char_number(1213)