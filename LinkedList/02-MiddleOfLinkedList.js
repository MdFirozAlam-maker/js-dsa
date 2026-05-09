//Slow & Fast Pointer

//First Approach convert linked list to Array

// let oddHead = { val: "1", next: { val: "2", next: { val: "3", next: null } } };
// // Length = 3 → middle = 1.5   
// function linkedListToArray(head) {
//   const arr = [];
//   let curr = head;

//   while(curr != null) {
//     arr.push(curr.val);
//     curr = curr.next;
//   }
//   let middle = Math.ceil(arr.length/2)
//   return arr[middle];
// }

// console.log(linkedListToArray(oddHead))

//Second Approach

// List: 1 -> 2 -> 3 -> 4 -> 5
// let oddHead = {
//     val: "1",
//     next: {
//         val: "2",
//         next: {
//             val: "3",
//             next: {
//                 val: "4",
//                 next: {
//                     val: "5",
//                     next: null
//                 }
//             }
//         }
//     }
// };
// console.log(middleoflinkedlist(oddHead).val); // Expected: "3" 

function middleoflinkedlist(evenHead) {
  let fast = evenHead;
  let slow = evenHead;

  while(fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// List: 1 -> 2 -> 3 -> 4 -> 5 -> 6
let evenHead = {
    val: "1",
    next: {
        val: "2",
        next: {
            val: "3",
            next: {
                val: "4",
                next: {
                    val: "5",
                    next: {
                        val: "6",
                        next: null
                    }
                }
            }
        }
    }
};
console.log(middleoflinkedlist(evenHead).val); // Expected: "4"   