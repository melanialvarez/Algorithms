/*
Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

5:20
5:58

Prime number: Only divisible between itself and 1

implement isPrimeFunction

for each element from input to 2 call isPrimeFunction
everyone of those calls which return true, add to a counter.


isPrimeFunction(n)

loop from n-1 to 2
    if(n%i === 0) return false
    return true

 */

var storedData = {};

function isPrime(n) {

    storedData[n] = false;
    for(var i=Math.floor(Math.sqrt(n)); i>=2; i--){
        if(storedData[n+'-'+i] != undefined) return storedData[n+'-'+i];
        storedData[n+'-'+i] = n%i === 0;
        if(n%i === 0) return false;
    }
    return true;
}

function f(input){
    var counter = 0;
    for(var i=input-1; i>1; i--){
        var r = isPrime(i);
        // console.log(foundPrimes);
        if(r) {
            console.log('with ', i);
            counter++;
        }
    }
    return counter;
}

console.log(f(5));