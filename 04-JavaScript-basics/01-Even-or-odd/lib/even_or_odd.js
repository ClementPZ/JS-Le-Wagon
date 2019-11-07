const evenOrOdd = (number) => {
  // TODO: this should return "even" if the number is even, "odd" otherwise
  if (number % 2 !== 0) {
    console.log("odd");
  } else {
    console.log("even");
  }
};

console.log(evenOrOdd(3));

module.exports = evenOrOdd; // Do not remove. We need this for the spec to know about your method.




// const number = 13;

//   const isOdd = number % 2 !== 0;

//   console.log(isOdd);
