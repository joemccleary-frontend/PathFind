const A = [
  [true, true, true, true, true],
  [true, false, false, false, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true]
]
const P = [0, 0]
const Q = [2, 2]

// Initialize global array to hold coordinate info and temp array
let Counter = []
let queue = []

pathfind(A, P, Q)
function pathfind(A, P, Q) {
  Counter.push([Q[0], Q[1], 0])
  queue.push([Q[0], Q[1], 0])

  getAdjacent(queue)
  function getAdjacent(queue) {
    console.log("Queue", queue)
    let adj1 = [queue[0][0]+1, queue[0][1], queue[0][2]+1]
    console.log("adj1:", adj1)
    let adj2 = [queue[0][0]-1, queue[0][1], queue[0][2]+1]
    console.log("adj2:", adj2)
    let adj3 = [queue[0][0], queue[0][1]+1, queue[0][2]+1]
    console.log("adj3:", adj3)
    let adj4 = [queue[0][0], queue[0][1]-1, queue[0][2]+1]
    console.log("adj4:", adj4)
    test(adj1, adj2, adj3, adj4)
    test(adj2, adj1, adj3, adj4)
    test(adj3, adj1, adj2, adj4)  
    test(adj4, adj1, adj2, adj3)
  }
  function test(adjacent, m1, m2, m3) {
  console.log("\nTesting:", adjacent)
    if (A[adjacent[1]][adjacent[0]] == true) {
      console.log("not blocked")
      if (!(adjacent in Counter)) {
        Counter.push(adjacent)
        console.log("Added to counter:", Counter);
        if ((adjacent[0], adjacent[1]) === P) {
          console.log("final one")
          return adjacent[2]
        }
        else {
          console.log("Queue (pre-slice):", queue)
          if (queue[0] === (m1 || m2 || m3)) {
            console.log("Queue[0]=",queue[0], "m1:",m1, "m2:",m2, "m3", m3)
            //queue.splice(0,1)
            queue.push(adjacent)
            console.log("Queue (now):", queue)
          }
          else {
            queue.splice(0,1)
            queue.push(adjacent)
            console.log("Queue (post slice):", queue)
          }
        }} 
      else {
        //position is already in array
      }} 
    else {
      console.log("blocked")
      //position is blocked
  }
  }
  //for (i in queue) {
  //  getAdjacent(i)
  //}
}
module.exports.pathfind = pathfind


/*
let complete = false
// Initialize global array to hold coordinate info and temp array
let Counter = []
let queue = []

function pathfind(A, P, Q) {
  //check if start and end points are the same
  if (P === Q) {
    return 0
  }
  else {
    //turn Q into 3 digit coord with z counter
    let newQ = [Q[0], Q[1], 0]
    //add starting point to counter
    Counter.push(newQ)
    //Iterate round the first loop
    nearby(A, newQ)
    checkIfComplete()
    //while not finished pass through next item in queue
    while (complete === false) {
      nearby(queue[0])
      queue.shift
    }
  }
}
function nearby(A, coord) {
  let adjacent1 = [coord[0]+1, coord[1], coord[2]+1]
  checkIfBlocked(A, adjacent1)
  let adjacent2 = [coord[0]-1, coord[1], coord[2]+1]
  checkIfBlocked(A, adjacent2)
  let adjacent3 = [coord[0], coord[1]+1, coord[2]+1]
  checkIfBlocked(A, adjacent3)
  let adjacent4 = [coord[0], coord[1]-1, coord[2]+1]
  checkIfBlocked(A, adjacent4)
}
function checkIfBlocked(A, x) {
  //if not blocked
  if ((A[x[0]], A[x[1]]) === true) {
    //add it to Counter
    addToList(x)
  }
  else {
    //do nothing
  }
}
function addToList(x) {
  if (x in Counter) {
    //nothing already in list
  }
  else {
    Counter.push(x)
    //add to Queue
    queue.push(x)
    console.log(Counter)
  }
}


function checkIfComplete() {
  for (var i = 0; i < Counter.length; i++) {
      if ((Counter[i][0], Counter[i][1]) === P) {
        return [Counter[i][2], complete=true]
      }
      else {
        //do nothing
      }
  }}

module.exports.pathfind = pathfind
*/