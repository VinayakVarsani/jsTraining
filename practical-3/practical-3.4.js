Array.prototype.swap = function (x, y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
};

let a = [1, 2];

console.log(a.swap(0, 1)); // [2, 1]
