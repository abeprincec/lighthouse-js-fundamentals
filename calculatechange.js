var calculateChange = function(total, cash) {
  // Your code here

  var denominations = {
    twenty: 2000,
    ten: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    dollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
  };

  var result = {};

  var change = cash - total;

  for (var key in denominations) {
    value = denominations[key];
    currentDivision = Math.floor(change / value);
    if (currentDivision > 0) {
      result[key] = currentDivision;
      change -= currentDivision * value;
    }
  }

  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
