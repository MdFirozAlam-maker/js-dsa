/**
 * Stack
 */
// let stack = [];
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack)

// stack.pop();


// console.log(stack);


// const stack1 = [1,2,3,4,5,6]

// console.log(stack1[stack1.length-1])
// console.log(stack1.length-1)

// console.log(stack1[3]);    //Invalid stack operation(it will execute in js but not valid opeartion for stack)

/**
 * Queues
 */

let q = [];

q.push(1);    //enqueue
q.push(2);
q.push(3);
q.push(4);

q.shift();     //dequeue

let front = q[0];

// q.pop(); , q[3]  ->  //Never do this


console.log(q)
console.log(front)