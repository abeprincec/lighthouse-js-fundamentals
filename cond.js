var conditionalSum = function(values, condition) {
  // Your code here

  if (values.length === 0) {
    return 0;
  }

  var oddTotal = 0;
  var evenTotal = 0;
  if (condition === 'odd') {
    for (var i = 0; i < values.length; i++) {
      if (values[i] % 2 == 1) {
        oddTotal += values[i];
      }
    }

    return oddTotal;
  }

  if (condition === 'even') {
    for (var i = 0; i < values.length; i++) {
      if (values[i] % 2 == 0) {
        evenTotal += values[i];
      }
    }

    return evenTotal;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));
