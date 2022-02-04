const noOfObject = 3;

var result = [];

while (result.length < noOfObject) {
  var res = Math.floor(Math.random() * 100) + 1;

  if (result.indexOf(res) === -1) result.push(res);
}

console.log(result);
