/*
Given a singly linked list, group all odd nodes together followed by the even nodes.
Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

8:36
9:20
Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL


switch

1->2->3->4->5->NULL

save pointer to firstEvenofArray (2)
save firstOdd //1
save firstEven //2


while (first)
1-3-4-5
2-4-5



set firstOdd.next = firstEven.next
1-3-5
2-3-4-5

ResetFirstOdd
firstOdd = firstEven.next//5

firstEven.next = firstOdd.next


resetFirstEven
firstEven = firstOdd.next // 4

loop again

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


/*
Given a singly linked list, group all odd nodes together followed by the even nodes.
Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

8:36
Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL


switch

1->2->3->4->5->NULL

save pointer to firstEvenofArray (2)
save firstOdd //1
save firstEven //2


while (first)
1-3-4-5
2-4-5



set firstOdd.next = firstEven.next
1-3-5
2-3-4-5

ResetFirstOdd
firstOdd = firstEven.next//5

firstEven.next = firstOdd.next


resetFirstEven
firstEven = firstOdd.next // 4

loop again

 */

function print(h){
    while(h){
        h=h.next;
    }
}


function f(head) {
    var fo = head;
    var fe = head.next;

    var savedFE = fe;

    while(fe && fo){
        fo.next = fo.next && fo.next.next || fo;
        fe.next = fe.next && fe.next.next;
        fo = fo.next;
        fe = fe.next;
    }

    fo.next = savedFE;
}


var oddEvenList = function(head) {
    if(!head) return null;
    f(head);
    // print(head)
    return head;
};