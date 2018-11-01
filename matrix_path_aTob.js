/*
You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

For example, given the following board:

[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]]

4:48

start adding a 0 value to the start point (this 0 value is currentJumpsCount)
add to all the neighbors currentJumpsCount++ (only if the value is undefined or smaller than the current value)
when done computing this values, return value at final coordinates

How to add this values?

build empty array based on the matrix I got
set values to start coordinates to 0
setNeighbors(row, col, A, currentJumpsCount);


setNeighbors
    top = row-1, col
    bottom = row+1, col
    left = row, col-1
    right = row, col+1

    if that spot exists in the gottenArray and it is not T then add currentJumpsCount value to that spot
    if that spot is T then add flag? true
    for each one of the neighbors cb setNeighbors when they exist

 */

function setNeighbors(M, A, row, col, currentJumpsCount) {
    console.log(A);
    var top = M[row-1] && M[row-1][col];
    var bottom = M[row+1] && M[row+1][col];
    var left = M[row] && M[row][col-1];
    var right = M[row] && M[row][col+1];

    //Top
    if(top === 'f'){
        A[row-1][col] = Math.min(A[row-1][col] || currentJumpsCount, currentJumpsCount);
        setNeighbors(M, A, row-1, col, currentJumpsCount+1);
    }
    if(top === 't'){
        A[row-1][col] = 't';
    }

    //Bottom
    if(bottom === 'f'){
        A[row+1][col] = Math.min(A[row+1][col] || currentJumpsCount, currentJumpsCount);
        // setNeighbors(M, A, row+1, col, currentJumpsCount+1);
    }
    if(bottom === 't'){
        A[row+1][col] = 't';
    }

    //Left
    if(left === 'f'){
        A[row][col-1] = Math.min(A[row][col-1] || currentJumpsCount, currentJumpsCount);
        // setNeighbors(M, A, row, col-1, currentJumpsCount+1);
    }
    if(left === 't'){
        A[row][col-1] = 't';
    }

    //Right
    if(right === 'f'){
        A[row][col+1] = Math.min(A[row][col+1] || currentJumpsCount, currentJumpsCount);
        // setNeighbors(M, A, row, col+1, currentJumpsCount+1);
    }
    if(right === 't'){
        A[row][col+1] = 't';
    }

}

function main(M, rowI, colI, rowF, colF) {
    var emptyA = [];
    for(var i=0; i<M.length; i++){
        emptyA.push([]);
    }
    var currentJumpsCount = 0;
    emptyA[rowI][colI] = currentJumpsCount;
    currentJumpsCount++;
    console.log(emptyA);
    setNeighbors(M, emptyA, rowI, colI, currentJumpsCount);
    console.log(emptyA);
}

var M = [['f', 'f', 'f', 'f'],
    ['t', 't', 'f', 't'],
    ['f', 'f', 'f', 'f'],
    ['f', 'f', 'f', 'f']];

main(M, 3, 0, 0,0);