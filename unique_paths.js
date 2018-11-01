/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

//build array
with only 1 at row 0 and 1 at column 0

loop all the spots in the middle
    sum the values of x-1 + y-1 to compute current value (if no x-1 or y-1 add cero)
    return last value

 */

//x row
//y col
function f(columns, rows) {
    //build array
    var matrix = [];
    for(var i=0; i<rows; i++){
        matrix[i] = [];

        for(var j=0; j<columns; j++){


            if(i === 0 || j === 0) matrix[i][j] = 1;
            else {
                matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
            }
        }
    }

    // console.log(matrix);
    return matrix[rows-1][columns-1];
}

console.log(f(3,2));