//Convert a string to camel case.

const camelCase = function(input) {
  let newInput = '';
  let strings = input.split(' '); // .split() divides input into substrings by using ' ' as a separator.
  
  for (let i = 0; i < strings.length; i++) {

    //When the index i is greater than zero ==> starting from the second string in input.
    //Add the first character and uppercase it, and with .slice(), add the rest of the characters in lower case. Otherwise, if i = 0, just add the string in lower case.
    i > 0 ? newInput += strings[i][0].toUpperCase() + strings[i].slice(1).toLowerCase() : newInput += strings[i].toLowerCase();
  }
  return newInput;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("thisis a new test"));
