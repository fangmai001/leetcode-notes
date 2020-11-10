/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const strArr = s.split("");
  const newArr = [];
  for (let i = 0; i < indices.length; i++) {
    const newIndex = indices[i];
    newArr[newIndex] = strArr[i];
  }
  return newArr.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(restoreString("abc", [0, 1, 2]));
console.log(restoreString("aiohn", [3, 1, 4, 2, 0]));
console.log(restoreString("aaiougrt", [4, 0, 2, 6, 7, 3, 1, 5]));
console.log(restoreString("art", [1, 0, 2]));
