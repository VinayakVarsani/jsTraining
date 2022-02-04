const arr = [20, 30, 40, 50, 60, 102, 181, 90, 100];

const max = arr.reduce((accumulator, currentValue) =>
  accumulator > currentValue ? accumulator : currentValue
);

console.log(max);
