var jsonData = require("./practical3-1.json");
const temp = new Set();
var newJson = {};

//For key
jsonData.map(function (a) {
  temp.add(a.technologyAssigned);
});

//for value

temp.forEach(function (a) {
  newJson[a] = [];
  jsonData.forEach((b) => {
    if (b.technologyAssigned === a) {
      newJson[a].push(b);
    }
  });
});
console.log(newJson);
