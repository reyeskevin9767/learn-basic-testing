const { forEach, map } = require('./index');

let sum = 0;
forEach([1, 2, 3], (value) => {
  sum += value;
});

if (sum !== 6) {
  throw new Error('Expected summing array to equal 6');
}

const result = map([1, 2, 3], (value) => {
  return value * 2;
});

if (result[0] !== 2){
  throw new Error(`Expeceted to find 2, but found  ${result[0]}`)
}

if (result[1] !== 4){
  throw new Error(`Expeceted to find 4, but found  ${result[0]}`)
}

if (result[2] !== 6){
  throw new Error(`Expeceted to find 6, but found  ${result[0]}`)
}



//* 3 Issues
//* 1. One Test Fail Will Stop All Tests
//* 2. Difficult to find the exact test that caused error
//* 3. Variables are scopre to file