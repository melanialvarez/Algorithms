/*
* For a list of numbers, return the number of items which generates a bump in between
* [1, 3, 4, 1, 2, 5, 6, 4 ]
* Sol: 4 because 3, 4, 1, 2
*
* 9:11 pm
*
* */

//example
/*
[1, 3, 4, 1, 2, 2, 1]
Ans = 4
prevBump = '-'
counter=1

[1, 3, 1]

When there is an equal, set counter to 0 and prevBump = ''
when it is + or - but is equal to the previews set counter=1 prevBump left the same
When we finish array, push the current counter
Add 1 always at the end


Pseudo-code

counter = 0;
prevBump = ''

Loop array
    compare i with i+1
        if(i < i+1) currBump = '-'
        if(i > i+1) currBump = '+'
        if(i = i+1)
            currBump = '' and counter = 0
            return

        if prevBump != currBump
            counter++
            prevBump = currBump
        if prevBump === currBump
            res.push(counter)
            counter = 1
            prevBump = currBump


   Edge cases:
   empty array
   always one way [1, 2, 3]



   ####### 2nd approach


   Pointers

   Example
   2:50
   3:15

    [1, 3, 4, 1, 2, 2, 1]

    [1, 2, 3, 4]

    c=1
    maxCounter = 0

    set startPointer to first element
    set finalPointer to second element

    move second element while elements are bumping
    when not bumping
        move first element to left of finalPointer
        update maxCounter
        reset counter to one if the elements are not = or 0 if they are equal


    Edge cases:
    empty array //return 0
    no bumps [1, 2, 3, 4] //return correct value

*/

function airplane_bump(array) {

    if(array.length <=1) return 0;

    var startPointer = 0;
    var finalPointer = 1;
    var maxCounter = 0;
    var counter = 0;
    var prevMove = '';

    for(var i=0; i< array.length -1; i++){
        console.log('compare ', array[i], array[i+1]);
        //If array is bumping
        if(array[i] !== array[i+1] && array[i] < array[i+1] && prevMove != "+" || array[i] > array[i+1] && prevMove != "-"){
            finalPointer++;
            counter++;
            console.log('bump ', counter);
        } else { //Array is not bumping
            console.log('break bump');
            startPointer = finalPointer-1;
            maxCounter = Math.max(maxCounter, counter);
            counter = array[i] === array[i+1]? 0 : 1;
        }
    }
    maxCounter = Math.max(maxCounter, counter) + 1;
    return maxCounter;
};

console.log(airplane_bump([1, 2, 2, 4, 4, 1, 2, 2, 4]));