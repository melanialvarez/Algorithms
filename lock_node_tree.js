/*
Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all
of its descendants or ancestors are not locked.

Design a binary tree node class with the following methods:

is_locked, which returns whether the node is locked

lock, which attempts to lock the node. If it cannot be locked, then it should return false.
Otherwise, it should lock it and return true.

unlock, which unlocks the node. If it cannot be unlocked, then it should return false.
Otherwise, it should unlock it and return true.
You may augment the node to add parent pointers or any other property you would like.
You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes.
Each method should run in O(h), where h is the height of the tree.

5:49
6:01

is_locked
 ask if current node has prop locked = true;

 lock
    look for all parent nodes until no parent found
    if one of those parents has property locked= true return false, else return true and set locked=true

unlook
    look for all parent nodes until no parent found
    if one of those parents has property locked= true return false, else return true and set locked=false

 */

function Node(val, locked, left, right, parent) {
    this.val = val;
    this.locked = locked;
    this.left = left;
    this.right = right;
    this.parent = parent;
}

var left = new Node("2", false, null, null);
var right = new Node("3", false, null, null);
var root = new Node("1", false, left, right);

left.parent = root;
right.parent = root;


function is_locked(node) {
    return node.locked;
}

function lock(node) {
    var currentNode = node;
    while(node.parent){
        if(node.parent.locked) return false;
        node = node.parent
    }
    currentNode.locked = true;
    return true;
}

function unlock(node) {
    var currentNode = node;
    while(node.parent){
        if(node.parent.locked) return false;
        node = node.parent
    }
    currentNode.locked = false;
    return true;
}

console.log(root);
lock(root);

console.log(root);
console.log(lock(left));
console.log(unlock(root));
console.log(lock(left));
console.log(root);