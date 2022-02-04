const arr1 = [1, 2, 2, 3];
var distinct_arr = [];
distinct_arr = arr1.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  []
);

console.log(distinct_arr);
