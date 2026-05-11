//Approach 1 -> Using Hashset
//Time Complexity -> O(n)
//Space Complexity -> O(n)

// function hasCycle(head) {
//   let set = new Set();
//   let curr = head;

//   while(curr!== null) {
//     if(set.has(curr)){
//       return true;
//     }

//     set.add(curr);
//     curr = curr.next;
//   }
//   return false;
// }



//Floyd's Cycle Finding Algorithm(slow&fast pointer technique)
//Time Complexity -> O(n);
//Space complexity -> O(1)

// function hasCycle(head) {
//   let fast = head;
//   let slow = head;
//   while(fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if(slow == fast) return true;
//   }

//   return false;
 

// }
// function hasCycle(head) {
//   let slow = head;
//   let fast = head.next;
//   while(slow != fast)  {
//     if(fast === null || fast.next == null) {
//       return false;
//     }
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return true;
// }


// 


