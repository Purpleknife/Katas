/*Create a function that will receive an array of instructor objects,
and will return a new object that has the following format:
{
  CourseName: [instructors]
}*/

const organizeInstructors = function(instructors) {
  let output = {};

  instructors.forEach(function(instructor) {
    let courseName = instructor.course;
    if (output[courseName] === undefined) { //If output does not contain instructor.course (or courseName), push the later in output and assign an empty array to it.
      output[courseName] = [];
    }
    output[courseName].push(instructor.name); //Then we push instructor.name into courseName.
  });
  return output;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
