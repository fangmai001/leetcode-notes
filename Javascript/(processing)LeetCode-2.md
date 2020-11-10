# LeetCode #2 Add Two Numbers

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
  let currentNode1 = l1;
  let numArr1 = [];
  let num1 = 0;
  while (currentNode1 !== null) {
    numArr1.push(currentNode1.val);
    currentNode1 = currentNode1.next;
  }
  num1 = parseInt(numArr1.reverse().join(""));

  let currentNode2 = l2;
  let numArr2 = [];
  let num2 = 0;
  while (currentNode2 !== null) {
    numArr2.push(currentNode2.val);
    currentNode2 = currentNode2.next;
  }
  num2 = parseInt(numArr2.reverse().join(""));

  let numResult = num1 + num2;
  let numArrResult = String(numResult).split("");
  let resultListNote = new ListNode();
  console.log(numArrResult);
  while (numArrResult.length !== 0) {
    resultListNote.val = parseInt(numArrResult.pop());
    resultListNote.next = new ListNode(parseInt(numArrResult.pop()));
  }

  return resultListNote;
};

var listNode1 = new ListNode(2, new ListNode(4, new ListNode(3)));
var listNode2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(listNode1, listNode2));

```
