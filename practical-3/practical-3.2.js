var jsonData = require("./practical3-2.json");
var arr = {};

const funObj = (a) => {
  arr = [];
  for (key in a) {
    if (a.hasOwnProperty(key)) {
      const tempArray = JSON.stringify(a[key]);
      const t = key + " = " + tempArray;
      arr.push(t);
    }
  }
  return arr;
};

console.log(funObj(jsonData));
