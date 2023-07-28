export const fizzBuzzFunction = (start, end) => {
  const numArray = [];
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numArray.push("FizzBuzz");
      continue;
    }

    if (i % 5 === 0) {
      numArray.push("Buzz");
      continue;
    }

    if (i % 3 === 0) {
      numArray.push("Fizz");
      continue;
    }

    numArray.push(i);
  }

  return numArray;
};
