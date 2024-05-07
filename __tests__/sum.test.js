// sum.test.js


//npm test ./__tests__/sum.test.js

// test('adds 1 + 2 to equal 3', () => {
//   // TODO
// });
import { sum } from '../code-to-unit-test/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});
