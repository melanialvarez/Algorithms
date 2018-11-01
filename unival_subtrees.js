/*

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees: (the leafs and the 1 tree)

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

 5:55

 recursive

 if leftchild = rightchild
    if(!left) counter++;
    if(!right) counter++;
    add to counter
    if left cb(left)
    if right cb(right)



 */