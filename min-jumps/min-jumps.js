'use strict';

// Complete this algo
const minJumps = arr => {
  //max jump size = val of current position
  //current position starts as 0
  //worth of each = val + (current position - position)
  //choose jump size to place on position with max worth
  let jump = arr[0]

  let worthArr = []
  for (let i = 1; i <= jump; i++) {
    //position in worthArr + 1 = jump size
    worthArr.push(arr[0 + i] + i)
  }
};

module.exports = minJumps
