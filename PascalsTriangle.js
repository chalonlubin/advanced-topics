'use strict';

function generate(rows){
  const result = [Array.from(rows)];

  // [1]
  // [1,1]
  // [1,2,1]
  // [1,3,3,1]
  // [1,4,6,4,1]
  // [1,5,10,10,5,1]

  if (rows === 1) return [1]
  if (rows === 2) return [1,2]



}