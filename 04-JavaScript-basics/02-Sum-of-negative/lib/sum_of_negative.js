const sumOfNegative = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    if (number < 0) {
      sum += number;
    } else {
      sum = sum;
    }
  });
  return sum;
};

const array = [-4, 5, -2, 9];
console.log(sumOfNegative(array));

module.exports = sumOfNegative; // Do not remove.
