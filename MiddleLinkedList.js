/* Given the head of a singly linked list, return the middle node of
the linked list.
If there are two middle nodes, return the second middle node. */

function middleNode(head) {
  let slow = head; // 1 per loop
  let fast = head; // 2 per loop

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next
  }

  return slow;
}

// need to test theory on how to solve if they were to ask for first middle node.