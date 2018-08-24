/*
* Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1

[
   [5,4,11,2],
   [5,8,4,5]
]


*/

//Sol: Backtracking, recursion
//Example
/*
*
   First iteration
   5 + left.val + restOfTree // 9+ restOfTree
        9 + leftOfTree // 20
        9 + rightOfTree //No right tree

   5 + right.val + restOfTree

   //Edge cases:
   empty?
   Only one node?

*/


var sol = [];
function recursiveHelper(currentSum, currentArray, node, sum){ //27, [5,4, 11, 7], (7)
    if(currentSum === sum && !node.left && !node.right) sol.push(currentArray);
    if(currentSum > sum) return;
    if(currentSum < sum){//20<22
        //continue with recursive call
        if(node.left){
            var newSumLeft = currentSum+node.left.val; //20+7
            var newCurrentArray = currentArray.concat(node.left.val);//[5,4,11,7]
            recursiveHelper(newSumLeft, newCurrentArray, node.left, sum)//27, [5,4, 11, 7], (7)
        }
        if(node.right){
            var newSumRight = currentSum+node.right.val;//5+8
            var newCurrentArrayR = currentArray.concat(node.right.val);//[5,4,11,7]
            recursiveHelper(newSumRight, newCurrentArrayR, node.right, sum);//27, [5,4, 11, 7], (7)
        }
    }
}


var pathSum = function(root, sum) {
    if(!root) return [];
    recursiveHelper(root.val, [root.val], root, sum);
    return sol;
};


//Note: Create the node class to call pathSum
//This problems comes from leetcode: https://leetcode.com/problems/path-sum-ii/description/