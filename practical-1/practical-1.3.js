const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 11, 12, 4, 9];

function intersect(arr1, arr2) {
  var results = [];
  for (const element of arr1) {
    if (arr2.indexOf(element) == -1) {
      results.push(element);
    }
  }
  arr2.forEach((element) => {
    if (arr1.indexOf(element) == -1) {
      results.push(element);
    }
  });

  return results;
}

console.log(intersect(arr1, arr2));
