/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

7:58
8:16

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

sum l1.val with l2.val
if the sum > 9 create a carryOn of sum/10
add the sum (or the remining of the division) as a new node to the answer
next iteration would add that carryOn

2+5
(7)

6+4 = 10/10 = 1 = carry -> res = 10%10=0
(0)

3+4+carry = 8
(8)

Edge cases
Can the lists be of different size?
(2 -> 4 -> 3) + ()

7-0-1

Empty list?
Is the number always <= 9?
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}


function f(l1, l2) {
    var carry = 0;
    var result;
    var arrRes = [];
    while(l1 || l2 || carry > 0){
        var val = l1 && l2? l1.val + l2.val + carry: (l1 && l1.val || l2 && l2.val ) + carry;
        if(!l1 && !l2) val = carry;
        if(val > 9){
            carry = Math.floor(val/10);
            val = val%10;
        } else {
            carry = 0;
        }
        var node = new ListNode(val, null);
        arrRes.push(val);
        // console.log(val)
        if(result) result.next = node;
        else result = node;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return arrRes;
}


var addTwoNumbers = function(l1, l2) {
    return f(l1,l2)
};