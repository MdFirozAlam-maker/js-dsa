function LinkedList() {
  this.head = null;
  this.size = 0;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

let newNode1 = new Node(10);
let newNode2 = new Node(20);
let newNode3 = new Node(30);
let newNode4 = new Node(40);

newNode1.next = newNode2;
newNode2.next = newNode3;
newNode3.next = newNode4;

let head = newNode1;

//First Approach -> Converting LinkedList into Array then Find Palindrome or not:

// let arr = [];

// let curr = this.head;
// while(curr !== null) {
//     arr.push(curr.val);
//     curr = curr.next;
// }

// console.log(arr);

// let left = 0;
// let right = arr.length - 1;
// while(left < right) {
//   if(arr[left] !== arr[right]){
//     return false;
//   }
//   left++;
//   right--;
// }
// return false;

function isPalindrome(head) {
  //finding the middle element
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

  //reverse the second half of list
  let prev = null;
  let curr = slow;
  while(curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  //checking for palindrome
  let firstlist = head;
  let secondlist = prev;
  while(secondlist) {
    if(firstlist.value !== secondlist.value) {
          return false;
    }
    firstlist = firstlist.next;
    secondlist = secondlist.next;
  }
  return true;
}


