function lastIndexOf(arr, value) {
  var a;

  if (arr.length == 1) {
    return 0;
  }

  for (var i = arr.length; i > 0; i--) {
    if (arr[i] == value) {
      return (a = i);
    }
  }

  return (a = -1);
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), '=?', 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), '=?', 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), '=?', -1);
console.log(lastIndexOf([5, 5, 5], 5), '=?', 2);
console.log(lastIndexOf([], 3), '=?', -1);
