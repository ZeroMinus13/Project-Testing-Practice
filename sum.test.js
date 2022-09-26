import { calculator, capitalize, reverseString, analyzeArray, caesarCipher } from './index';

test('calculator add', () => {
  expect(calculator.add(2, 2)).toBe(4);
});
test('calculator sub', () => {
  expect(calculator.sub(2, 2)).toBe(0);
});
test('calculator multiply', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
test('calculator divide', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test('Capitilize String', () => {
  expect(capitalize('deAth')).toBe('DEATH');
});

test('Reverse String', () => {
  expect(reverseString('right')).toBe('thgir');
});

test('Analyze Array and find length', () => {
  expect(analyzeArray().length([1, 8, 3, 4, 2, 6])).toBe(6);
});

test('Analyze Array and find max', () => {
  expect(analyzeArray().max([1, 8, 3, 4, 2, 6])).toBe(8);
});

test('Analyze Array and find min', () => {
  expect(analyzeArray().min([1, 8, 3, 4, 2, 6])).toBe(1);
});

test('Analyze Array and find average', () => {
  expect(analyzeArray().average([1, 8, 3, 4, 2, 6])).toBe(4);
});

test('CAESAR CIPHER TEST 1', () => {
  expect(caesarCipher('greetings good sir!', 0)).toBe('greetings good sir!');
});
