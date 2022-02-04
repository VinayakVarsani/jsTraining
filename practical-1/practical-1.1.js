const arr = [129, 139, 155, 176, 200, 130];
const calculateAvg = (arr = []) => {
  const reducer = (acc, value, index, array) => {
    let val = acc + value;
    if (index === array.length - 1) {
      return val / array.length;
    }
    return val;
  };
  const res = arr.reduce(reducer, 0);
  return res;
};
console.log(calculateAvg(arr));
