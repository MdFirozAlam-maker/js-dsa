// function IntersectionofLinkedList(headA,headB) {
//   let p = headA;
//   let q = headB;

//   while(p !== q) {
//     p = (p===null) ? headB : p.next;
//     q = (q===null) ? headA : q.next;
//   }
//   return p;
// }

// function IntersectionofLinkedList(headA,headB) {
//   let p = headA;
//   let set = new Set();
//   while(p) {
//     set.add(p);
//     p = p.next;
//   }

//   let q = headB;
//   while(q) {
//     if(set.has(q)){
//       return q;
//     }else {
//       q = q.next;
//     }
// }

// }


