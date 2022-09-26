const calculator = (() => {
  let add = (a, b) => a + b;
  let sub = (a, b) => a - b;
  let multiply = (a, b) => a * b;
  let divide = (a, b) => a / b;
  return { add, sub, multiply, divide };
})();

function capitalize(str) {
  return str.toUpperCase();
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function analyzeArray() {
  let length = (arr) => arr.length;
  let max = (arr) => Math.max(...arr);
  let min = (arr) => Math.min(...arr);
  let average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

  return { length, max, min, average };
}

const caesarCipher = (str, shift) => {
  if (shift === 0) return str;
  return str.replace(/[a-z]/g, (char) =>
    String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
  );
};
export { calculator, capitalize, reverseString, analyzeArray, caesarCipher };
