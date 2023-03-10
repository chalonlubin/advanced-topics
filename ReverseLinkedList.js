"use strict";

/* Given the head of a singly linked list, reverse the list, and return the reversed list. */

function reverseList(head) {
  let prev = null;  // set prev to null
  let cur = head; // set cur to head

  while (cur) {
    let next = cur.next; // hold the next val
    cur.next = prev; // set new next to prev
    prev = cur; // set prev to current
    cur = next; // update cur position
  }
  head = prev
  return head; // once cur is null return the prev which will be new head
}
