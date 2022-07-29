//Create a function that receives a number maxValue as input and creates a square multiplication table where maxValue is the largest value in the table.

const multiplicationTable = function(maxValue) {

  let table = '';

  for (let i = 1; i <= maxValue; i++) { //row: Looping from 1 to maxValue.
    for (let j = 1; j <= maxValue; j++) { //column: Iterate through each number from the outer loop.
      table += (i * j) + ' '; //Return i multiplied by j and add a whitespace after it.
    }
    table += '\n'; //Add a new line after each table.
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
