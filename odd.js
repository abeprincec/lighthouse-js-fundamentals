function isOdd(num) {
    return num % 2 !== 0;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));


function howManyHundreds(num) {
  
    var a = num / 100;
    
    var b = a % 10;
    
    return a;
  }
  
  console.log(howManyHundreds(1000), "=?", 10);
  console.log(howManyHundreds(894), "=?", 8);
  console.log(howManyHundreds(520), "=?", 5);
  console.log(howManyHundreds(99), "=?", 0);
  console.log(howManyHundreds(0), "=?", 0);