class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var node = new Node('1',
            new Node('2',
                new Node('4', null, null),
                new Node('5', null, null)),
            new Node('3', null, null));

//Example
/*
*         1
*      2     3
*    4   5  6  7
* */

//Sol: 1234567
//Approach: Recursive

var result = [];

function serialize(node, depth) {
    result[depth] = result[depth]? result[depth].concat(node.val) : [node.val];
    if(node.left) serialize(node.left, depth+1);
    if(node.right) serialize(node.right, depth+1);
}

serialize(node, 0);

console.log(result);
