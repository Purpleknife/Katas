//Sum the largest numbers in an array without using .sort, .map, .filter

//The easy way ↓ using Math.max():
const sumLargestNumbers = function(data) {

  let maxOne = Math.max(...data);
  let maxOneIdx = data.indexOf(maxOne);
  data.splice(maxOneIdx, 1); //Splice modifies the original array tho.

  let maxTwo = Math.max(...data);
  
  return maxOne + maxTwo;
};


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
