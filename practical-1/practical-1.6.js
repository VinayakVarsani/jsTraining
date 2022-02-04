function sumStr(str) {
  let strArr = str.split(",");
  let sum = strArr.reduce(function (total, num) {
    return parseFloat(total) + parseFloat(num);
  });

  return sum;
}
let str1 = "1,2,3,4,5";
console.log(sumStr(str1));
