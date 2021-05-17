module.exports.pathfind = pathfind

const A = [
  [true, true, true, true, true],
  [true, false, false, false, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true]
]
const P = [0, 0]
const Q = [2, 2]

// Initialize global array to hold coordinate info (Counter) and temp array for next coords to be tested(queue) and those already tested (tested)
let Counter = []
let queue = []
let tested = []

pathfind(A, P, Q)
function pathfind(A, P, Q) {
  //pushing starting coords
  Counter.push([Q[0], Q[1], 0])
  queue.push([Q[0], Q[1], 0])

  getAdjacent(queue)
  function getAdjacent(queue) {
    //Debugging visibility
    console.log("New func call - current queue:", queue)
    console.log("current coord to be tested:",queue[0])
    //add to tested
    tested.push(queue[0])
    console.log("Tested:", tested)
    //get adjacent coords
    let adj1 = [queue[0][0]+1, queue[0][1], queue[0][2]+1]
    console.log("adj1:", adj1)
    let adj2 = [queue[0][0]-1, queue[0][1], queue[0][2]+1]
    console.log("adj2:", adj2)
    let adj3 = [queue[0][0], queue[0][1]+1, queue[0][2]+1]
    console.log("adj3:", adj3)
    let adj4 = [queue[0][0], queue[0][1]-1, queue[0][2]+1]
    console.log("adj4:", adj4)
    //test each of them
    test(adj1)
    test(adj2)
    test(adj3)  
    test(adj4)
  }
  function test(adjacent) {
  console.log("\nTesting:", adjacent)
    //check if blocked
    if (A[adjacent[1]][adjacent[0]] == true) {
      console.log("not blocked")
      //check if already in counter
      //doesnt account for same coords different counter
      if (!(adjacent in Counter)) {
        Counter.push(adjacent)
        console.log("Added to counter:", Counter);
        //solution achieved return
        if ((adjacent[0], adjacent[1]) === P) {
          console.log("final one")
          return adjacent[2]
        }
        //solution not found adjust queue
        else {
          console.log("Queue (pre-slice):", queue)
          if (queue[0] in tested) {
            console.log("Queue[0]=",queue[0])
            queue.splice(0,1)
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
        console.log("position is already in array")
      }} 
    else {
      console.log("blocked\n")
      //position is blocked
  }
  }
  for (i=0; i<queue.length; i++) {
    getAdjacent(queue)
  }
}


