//Find which instructor has the longest name.

const instructorWithLongestName = function(instructors) {
  let lgth = 0; //Length of the value of the key 'name'.
  let longestName; //The object with the longest name.

  //Find the object 'instructor' in the array 'instructors' whose 'name' has the longest length.
  instructors.forEach(function(instructor) {
    if (instructor.name.length > lgth) {
      lgth = instructor.name.length;
      longestName = instructor;
    }
  });
  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
