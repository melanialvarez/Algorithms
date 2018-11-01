/*
Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.

Recall that the median of an even-numbered list is the average of the two middle numbers.

For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

2
1.5
2
3.5
2
2
2

8:00

at each point I have to sort the current subarray
but maybe to do that and dont affect performance I can save the previously sorted list and only insert
the new element on it
p=[]
ins(2) = [2]

p=[2]
ins(1) = [1,2]


p=[1, 2]
ins(5) = [1,2, 5]

n= A.length
m= 0, 1, 2... m-1

n*1 n*2 n*3 n*m

for each n, loop one time m
 */

function insertElement(e, A) {
    // console.log('insert ',e, A);
    var i =0;
    var newA = [];
    while(A[i]<e){
        // console.log('push ', A[i]);
        newA.push(A[i]);
        i++;
    }
    newA.push(e);
    newA = newA.concat(A.slice(i));
    return newA;
}

function f(A, i, sortedA) {
    if(A[i] === undefined) return;
    var currentElement = A[i];
    var newSorted = insertElement(currentElement, sortedA);
    // console.log(newSorted);
    var media = newSorted.length%2?
        newSorted[Math.floor(newSorted.length/2)] :
        (newSorted[(newSorted.length/2) -1] + newSorted[newSorted.length/2])/2;

    console.log(media);
    f(A, i+1, newSorted);


}

function main() {
    var sorted = [];
    f([2, 1, 5, 7, 2, 0, 5], 0, sorted)
}

main();