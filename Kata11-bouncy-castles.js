//Calculate the volume of an attraction.
//Each attration has a different shape. Example: the duck is made up of 2 spheres and a cone.
//First, calculate the volume of every individual shape.

const PI = 3.14159;

//Sphere volume function:
const sphereVolume = function(radius) {
  return (4 / 3) * PI * Math.pow(radius, 3);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
console.log(sphereVolume(10));

//Cone volume function:
const coneVolume = function(radius, height) {
  return (1 / 3) * PI * Math.pow(radius, 2) * height;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(coneVolume(3, 5));

//Prism volume function:
const prismVolume = function(height, width, depth) {
  return width * depth * height;
};

console.log(prismVolume(3, 4, 5) === 60);
console.log(prismVolume(3, 4, 5));

//Total volume function:
const totalVolume = function(solids) {
  let result = 0;
  for (let solid of solids) { //Iterate through every object in the array solids.
    if (solid.type === 'sphere') {
      result += sphereVolume(solid.radius);
    } else if (solid.type === 'cone') {
      result += coneVolume(solid.radius, solid.height);
    } else if (solid.type === 'prism') {
      result += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return result;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
console.log(totalVolume(duck));
