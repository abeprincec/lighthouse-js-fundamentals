function repeatNumbers(data) {
  // Put your solution here

  var result = [];


  for (var i = 0; i < data.length; i++) {
    var num = data[i][0];
    var times = data[i][1];
    var repeatednum = '';

    for (var j = 0; j < times; j++) {
      repeatednum += num;
    }
    result.push(repeatednum);
  }
  return result.join(', ');
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
