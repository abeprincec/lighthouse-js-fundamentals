var multiplicationTable = function(maxValue) {
  var maxNum = maxValue * maxValue;
  var output = '';

  for (var i = 1; i <= maxValue; i++) {
    if (i == maxValue) {
      output += '+--' + '\n';
    }
    for (var j = 1; j <= maxValue; j++) {
      output += (i * j).toString();
    }
    output += '\n';
  }

  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
