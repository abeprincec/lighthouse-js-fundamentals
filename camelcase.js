var camelCase = function(input) {
  // Your code here
  return input.replace(/\W+(.)/g, function(match, chr) {
    return chr.toUpperCase();
  });
};

console.log(camelCase('this is a string'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase('supercalifragalisticexpialidocious'));
