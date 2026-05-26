// let q1 = [];
// let q2 = [];


// //Pushing values 
// function push(x) {
//   q1.push(x);
// }

// //Removing values

// function pop() {
//   let n = q1.length;
//   for(let i=0;i<n-1;i++) {
//     q2.push(q1.shift());
//   }
//   let ans = q1.shift();
//   let temp = q1;
//   q1 = q2;
//   q2 = temp;
//   return ans;
// }

// //Finding top

// function top() {
//   let n = q1.length;
//   for(let i=0;i<n-1;i++) {
//     q2.push(q1.shift());
//   }
//   let ans = q1.shift();
//   q2.push(ans);
//   let temp = q1;
//   q1 = q2;
//   q2 = temp;
//   return ans;
// }


// //checking empty or not
// function empty() {
//   return q1.length === 0;
// }


//Implementing Stack using One Queues


let q1 = [];

function push(x) {
  q1.push(x);
  let n = q1.length;
  for(let i=0;i<n-1;i++) {
    const front = q1.shift();
    q1.push(front);
  }
}

function pop() {
  let n = q1.length;
  for(let i=0;i<n-1;i++) {
    const enqueue = q1.shift();
    const dequeue = q1.push(enqueue);
  }
  return q1.shift();
}