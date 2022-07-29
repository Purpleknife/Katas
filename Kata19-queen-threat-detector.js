//Goal: detect if two queens on a chess board can attack each other.


//Function to return a nested array representing the board, containing the location of two queens.
const generateBoard = function(whiteQueen, blackQueen) {
  let boardLine = [];
  let chessBoard = [];

  for (let i = 0; i < 8; i++) { //Loop through the rows.
    boardLine = [];
    for (let j = 0; j < 8; j++) { //Loop through the columns.

      if (i === whiteQueen[0] && j === whiteQueen[1] || i === blackQueen[0] && j === blackQueen[1]) {
        boardLine.push(1);
      
      } else {
        boardLine.push(0);
      }
    }
    chessBoard.push(boardLine);
  }
  return chessBoard;
};


//Function to check whether or not the two queens are positioned so that they attack each other.
const queenThreat = function() {
  let result = false;
  if (whiteQueen[0] === blackQueen[0]) { //Checks if the queens align in the rows.
    result = true;
  } else if (whiteQueen[1] === blackQueen[1]) { //Checks if the queens align in the columns.
    result = true;
  } else if (Math.abs(whiteQueen[0] - blackQueen[0]) === Math.abs(whiteQueen[1] - blackQueen[1])) { //Checks if the queens align in the left-to-right diagonal.
    result = true;
  } else if ((whiteQueen[0] + whiteQueen[1]) === (blackQueen[1] + blackQueen[0])) { //Checks if the queens align in the right-to-left diagonal.
    result = true;
  }
  return result;
};

let whiteQueen = [0, 2];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
