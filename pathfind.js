const A = [
  [true, true, true, true, true],
  [true, false, false, false, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true]
]
const P = [0, 0]
const Q = [0, 0]

// Initialize global array to hold coordinate info
const Counter = []

function pathfind(A, P, Q) {
  //check it start and end points are the same
  if (P === Q) {
    return 0
  }
  else {
    //turn into 3 digit coord for z counter
    const newQ = [Q[0], Q[1], 0]
    //check nearby
    function nearby(newQ) {
      const adjacent1 = [newQ[0]+1, newQ[1]+1, newQ[2]+1]
      const adjacent2 = [newQ[0]+1, newQ[1]-1, newQ[2]+1]
      const adjacent3 = [newQ[0]-1, newQ[1]+1, newQ[2]+1]
      const adjacent4 = [newQ[0]-1, newQ[1]-1, newQ[2]+1]
      checkIfBlocked(adjacent1)
      checkIfBlocked(adjacent2)
      checkIfBlocked(adjacent3)
      checkIfBlocked(adjacent4)
    }
  }
  return 6
}
function checkIfBlocked(x) {
  if (A.x[0], A.x[1] === false) {
    //nothing
  }
  else {
    addToList(x)
  }
}
function addToList(x) {
  if (x in Counter) {
    nothing
  }
  else {
    Counter.push(x)
  }
}

module.exports.pathfind = pathfind
