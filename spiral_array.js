/*

Find the pattern and complete the function:
int[][] spiral(int n);
where n is the size of the 2D array.
Sample Result
input = 3
123
894
765

List the indexes

0,0
0,1
0,2

1,2
2,2

2,1
2,0

1,0
1,1



input = 4
01 02 03 04
12 13 14 05
11 16 15 06
10 09 08 07

X from 0 to input
y from 0 to input
x from input to 0
y from input to 0

smallest = 0
greatest = input-1 //3

X from s to g, y = smallest
y from s to g, x = greatest
x from g to s, y = greatest
y from g to smallest - 1, x = smallest

s--;
g--;

//s = 1
//g = 2

repeat loop



Clarifying questions:
Does it has to contain the 0?
3:45
4:21

 */
var r =[[],[],[],[]];

function f(input,s, g, current) {
    var s = s || 0;
    var g = g || input-1;
    var current = current || 0;

    // X from s to g, y = smallest
    for(var i=s; i<=g; i++){
        r[s][i] = current++;
        // r[i][s] = current++;
    }
    console.log(r);
    // y from s to g, x = greatest
    for(var i=s+1; i<=g; i++){
        r[i][g] = current++;
        // r[g][i] = current++;
    }
    console.log(r);

    // x from g to s, y = greatest
    for(var i=g-1; i>=s; i--){
        r[g][i] = current++;
        // r[i][g] = current++;
    }
    console.log(r);
    // y from g to smallest - 1, x = smallest
    for(var i=g-1; i>=s+1; i--){
        console.log('[i][s]', i,s);
        r[i][s] = current++;
        // r[s][i] = current++;
    }
    s++;
    g--;
    console.log(s, g);

    if(g>0) f(input-1, s, g, current);



}
f(4);

console.log(r);