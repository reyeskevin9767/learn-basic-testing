const assert = require('assert');
const { forEach, map } = require('./index');

//* Reaplaced with mocha
// const test = (desc, fn) => {
//   console.log('----', desc);
//   try {
//     fn();
//   } catch (err) {
//     console.log(err.message);
//   }
// };

it('The forEach function', () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });

  assert.strictEqual(sum, 6, 'Expected forEach to sum the array');
});

it('The Map Function', () => {
  const result = map([1, 2, 3], (value) => {
    return value * 2;
  });

  assert.deepStrictEqual(result, [2, 4, 6]);
});

//* 3 Issues without test function
//* 1. One Test Fail Will Stop All Tests
//* 2. Difficult to find the exact test that caused error
//* 3. Variables are scopre to file
