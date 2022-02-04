const input = [-1, 1, 0, 5, 10, -12, 20, 3, 4, 6];

const positiveNum = input.filter((item) => item > 0);
console.log(positiveNum);
const sumOfPositive = positiveNum.reduce((result, item1) => result + item1, 0);
console.log("Sum of Postive elements: " + sumOfPositive);
