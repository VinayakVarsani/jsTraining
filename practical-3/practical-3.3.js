var arrDuplicate = ["A", "B", "B", "C", "X", "Y", "Z", "A", "X"];
var unique = [];

function useSet(arrDuplicate) {
  return (unique = [...new Set(arrDuplicate)]);
}

console.log(useSet(arrDuplicate));
