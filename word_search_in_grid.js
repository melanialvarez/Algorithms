/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

8:21


get first letter of matrix
if I dont have more letters return true
if there is a neighbor and I still have letters on word cb with it (if the current letter is found, cb with substring)
if no neighbor
    if find of word: return true
    else return false

How to get neighbors?


board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "SEE", return true.
 */

function helper(row, column, M, remining, visited) {// 1,1 A {0-0 , 1-0, 1-1}
    var currentAnswer = false;
    if(!remining){
        console.log('entro??', row, column, remining, visited)
        return true;
    }

    var currentLetter = M[row][column];//B

    if(currentLetter && remining[0] && currentLetter === remining[0]){ //
        console.log('son iguales ', currentLetter,'vs', remining[0], 'de ', row, column);
        remining = remining.slice(1);//A
        if(!remining) currentAnswer = true;

    } else {
        // console.log('se rompe ', currentLetter , 'vs', remining[0]);
        return false;
    }

    //call neighbor
    if(M[row+1] && M[row+1][column]){//1,1 A
        if(!visited[row+1 + '-'+ column]) {
            // console.log("calling with bottom neighbor of ", M[row][column],  " which is ", M[row+1][column]);

            var newVisited = JSON.parse( JSON.stringify(visited));
            newVisited[row+1 + '-'+ column] = true; //{0-0 , 1-0, 1-1}
            var f1 = helper(row+1, column, M, remining, newVisited);//1,1 , A, {0-0 , 1-0, 1-1}
        }
    }

    if(M[row] && M[row][column+1]){//0,1  //BA
        if(!visited[row + '-'+ (column+1)])  {
            // console.log("calling with right neighbor of ", M[row][column],  " which is ", M[row][column+1]);

            var newVisited = JSON.parse( JSON.stringify(visited));//{0,0 }
            newVisited[row + '-'+ (column+1)] = true; //{0-0 , 0-1}
            var f2 = helper(row, column+1, M, remining, newVisited);// 0,1 BA
        }// 0,1, SEE
    }

    //call neighbor
    if(M[row-1] && M[row-1][column]){//1,0 //S
        if(!visited[row-1 + '-'+ column])  {
            // console.log("calling with up neighbor of ", M[row][column],  " which is ", M[row-1][column]);
            var newVisited = JSON.parse( JSON.stringify(visited));
            newVisited[row-1 + '-'+ column] = true;
            var f3 = helper(row-1, column, M, remining, newVisited);
        }//1,0, SEE
    }

    if(M[row] && M[row][column-1]){//0,1  //B
        if(!visited[row+ '-'+ (column-1)]){
            // console.log("calling with left neighbor of ", M[row][column],  " which is ", M[row][column-1]);

            var newVisited = JSON.parse( JSON.stringify(visited));
            newVisited[row+ '-'+ (column-1)] = true;
            var f4 = helper(row, column-1, M, remining, newVisited);
        }
    }

    return f1 || f2 || f3 || f4 || currentAnswer;

}

//QUEUE
//1,0 BF
//

board =
    [
        ['A']
    ];

function f(){
    var ans = false;
    for(var i=0; i< board.length; i++){
        for(var j=0; j< board[i].length; j++){
            console.log('starting with **** ', i, j);
            var ht = {}
            ht[i+'-'+j] = true;
            var currentAns = helper(i,j, board, "A", ht);
            ans = ans || currentAns;

        }
    }
    return ans;
}

console.log('ans', f());
// console.log(helper(0,0, board, "SEE", {}));