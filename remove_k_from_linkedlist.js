/*
Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.


1-> 2 -> 3 -> 4
k = 2

p1 - 1
p2 - 2

loop from 0 to k
    p2 move right
    p1 - 2
    p2 - 3

    p1.next = p2.next
    p2.next = null
 */

function Node(val, next) {
    this.val = val;
    this.next = next;
}

var one = new Node(1, null);
var two = new Node(2, null);
var tree = new Node(3, null);
var four = new Node(4, null);
one.next = two;
two.next = tree;
tree.next = four;

function f(node, k) {
    var p1 = node;
    var p2 = node.next;

    for(var i=0; i<k-1; i++){
        p2 = p2.next;
        p1 = p1.next;

    }
    p1.next = p2.next;
    // console.log(p1);
    p2.next = null;
    return node;
}

f(one, 2);
console.log(one);