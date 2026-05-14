function OddEvenLinkedList(head) {
  if(!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenhead = even;
    while(even && even.next) {
      odd.next = even.next;
      odd = odd.next;

      even.next = odd.next;
      even = even.next;
    }

    odd.next = evenhead;
    return head;
}