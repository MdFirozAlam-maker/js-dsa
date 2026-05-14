//First Approach

function RemoveElementInLinkedList(head,val) {
while(head && head.val === val) {
  head = head.next;
}
  let curr = head;
  while(curr && curr.next) {
    if(curr.next.val === val) {
      curr.next = curr.next.next;
    }else {
      curr = curr.next;
    }
    
  }
  return head
}


//Second Approach

// function RemoveElement(head,val) {
//   let sentinel = new NodeList();
//   let prev = sentinel;
//   while(prev && prev.next) {
//     if(prev.next.val === val){
//       prev.next = prev.next.next;
//     }else {
//       prev = prev.next;
//     }
//   }

//   return sentinel.next;
// }
