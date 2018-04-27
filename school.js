function whichSchool(age) {
  if (age < 12) {
    return 'Elementary School';
  } else if (age <= 18 && age >= 13) {
    return 'Secondary School';
  } else age > 19;
  return 'Lighthouse Labs';
}
console.log('I am 35. Which school should I go to?');
console.log(whichSchool(35));
console.log('I am 8. Which school should I go to?');
console.log(whichSchool(8));
console.log('I am 14. Which school should I go to?');
console.log(whichSchool(14));
