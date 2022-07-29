//Create a function that will return a string with each of the given values repeated the appropriate number of times.
//The first number in the array will be the value to repeat, the second will be the amount of times to repeat that value.

const repeatNumbers = function(data) {
  let output = '';
  let finalOutput = [];
  for (let i = 0; i < data.length; i++) { //Iterate over data to find how many nested arrays are there.
    for (let j = 0; j < data[i][1]; j++) { //Nested loop to iterate over the nested arrays. The stoppong condition is the second value of the nested array.
      output += data[i][0]; //For every loop, add the first number of the nested array to output and repeat the action 'second value' times.
    }
    
    finalOutput.push(output); //Push output into the finalOutput array.
    output = ''; //Sets output back to '' to clear for the next loop (in case there are multiple arrays nested in data.)
  }
  return finalOutput.join(', '); //.join() to return a string by concatenating the numbers in finalOutput and separating them with commas.
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
console.log(repeatNumbers([[20, 3], [2, 6], [99, 7]]));
