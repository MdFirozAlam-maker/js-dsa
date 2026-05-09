function LinkedList() {
  this.head = null;
  this.size = 0;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

const list = new LinkedList();


function AddingAtHead(){
let newNode1 = new Node(5);

newNode1.next = list.head;
list.head = newNode1;
list.size++;
console.log(list);

let newNode2 = new Node(3);

newNode2.next = list.head;
list.head = newNode2;
list.size++;
console.log(list);

let newNode3 = new Node(1);

newNode3.next = list.head;
list.head = newNode3;
list.size++;
console.log(list);

}

AddingAtHead();

function AddingAtTail() {
  let newNode = new Node(7);
  if(list.head === null) {
    list.head = newNode;
  }else {
    let curr = list.head;
    while(curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;

  }
  list.size++;
}

function gettingNodeval(index) {
  if(index<0 || index >= list.size) {
    return -1;
  }
  let curr = list.head;
  for(let i=0;i<index;i++) {
    curr = curr.next;
  }
  return curr.val;
}


function AddingAtIndex(index,val) {
  if(index<0 || index > list.size) return -1;
  if(index === 0) {
    AddingAtHead();
    return;
  }

  if(index === list.size) {
    AddingAtTail();
    return;
  }

  let newNode = new Node(val);
  let curr = list.head;
  for(let i=0;i<index-1;i++) {
    curr = curr.next;
  }
  newNode.next = curr.next;
  curr.next = newNode;
  list.size++;

}

function DeleteAtIndex(index) {
  if(index<0 || index>=list.size) return;
  if(index === 0) {
    list.head = list.head.next;
  }else {
    let curr = list.head;
    for(let i=0;i<index-1;i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  list.size--;
}