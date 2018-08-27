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


// Deserialize

//[[1], [2, 3], [4, 5], [6, 7]]
//children of index 0 are index 1
//children of indez 1.0 are index 2
//children of index 1.1 are index 3

var arr = [[1], [2, 3], [4, 5], [6, 7]];
var root = new Node(arr[0][0]);

function deserialize(arr){
    for(var i=0; i<arr.length; i++){//i=0
        for(var j=0; j<arr[i].length; j++){//j=0
            var currentVal = arr[i][j];//2
            newNode = new Node(currentVal);//(2)
            if(i%2 === 0){
                root.left = newNode ;
            } else {
                root.right = newNode;
            }

        }
    }
}

