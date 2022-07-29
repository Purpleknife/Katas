//Sum the numbers in the array which match the given condition, even or odd.

const conditionalSum = function(values, condition) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0 && condition === 'even') { //Sum if the numbers are even and the condition equals even.
      sum += values[i];
    } else if (values[i] % 2 !== 0 && condition === 'odd') { //Sum if the numbers are odd and the condition equals odd.
      sum += values[i];
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([3, 7, 9, 2, 4, 6], "odd"));
