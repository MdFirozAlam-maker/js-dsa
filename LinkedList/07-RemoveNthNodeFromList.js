//Using Two Pass
// function RemovingNthNodefromlist(head,n) {
//   //first i am finding length of the linked list
//   let curr = head;
//   let count = 0;
//   while(curr) {
//     curr = curr.next;
//     count++;
//   }

//   //Now finding from the last i have to delete
//   let deleteposition = count-n;
//   let sentinel = new Node();
//   sentinel.next = head;
//   let prev = sentinel;
//   for(let i=1;i<=deleteposition-1;i++) {
//       prev = prev.next;
//   }
//   prev.next = prev.next.next; 
// }


//Using One Pass 
function RemoveNthNodefromList(head,n) {
  let sentinel = new NodeList();
  sentinel.next = head;
  let p = head;
  let q = head;
  for(let i=0;i<n;i++) {
    q = q.next;
  }

  while(q && q.next) {
    p = p.next;
    q = q.next.next;
  }

  p.next = p.next.next;
  return sentinel.next;

}