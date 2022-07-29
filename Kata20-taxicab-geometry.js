/* Create a function that will receive an array of directions,
and return an object that calculates how far north and east those directions will take someone.*/

const blocksAway = function(directions) {

  let output = {east: 0, north: 0};
  let facingDirection = '';


  for (let i = 0; i < directions.length; i++) {
    switch (directions[i]) {
    case 'right':
      switch (facingDirection) {
      case 'north': output.east += directions[i + 1]; facingDirection = 'east'; break;
      case 'east': output.north -= directions[i + 1]; facingDirection = 'south'; break;
      case 'west': output.north += directions[i + 1]; facingDirection = 'north'; break;
      case 'south': output.east -= directions[i + 1]; facingDirection = 'west'; break;
      default: output.east += directions[i + 1]; facingDirection = 'east'; break; //When directions[0] = right, the default direction is east.
      }
      break;
    
    case 'left':
      switch (facingDirection) {
      case 'north': output.east -= directions[i + 1]; facingDirection = 'west'; break;
      case 'east': output.north += directions[i + 1]; facingDirection = 'north'; break;
      case 'west': output.north -= directions[i + 1]; facingDirection = 'south'; break;
      case 'south': output.east += directions[i + 1]; facingDirection = 'east'; break;
      default: output.north += directions[i + 1]; facingDirection = 'north'; break; //When directions[0] = left, the default direction is north.
      }
      break;
    }
  }
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

