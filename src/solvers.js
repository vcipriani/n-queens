/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solutionBoard;

  var placePieces = function(board, row) {
    if(row === n - 1) {
      for(var col = 0; col < n; col++) {
        board.togglePiece(row, col);
        if(!board.hasAnyRooksConflicts()) {
          solutionBoard = board;
        } else {
          board.togglePiece(row, col);
        }
      }
    } else {
      for(var col = 0; col < n; col++) {
        board.togglePiece(row,col);
        if(!board.hasAnyRooksConflicts()) {
          placePieces(board, row + 1);
          if(solutionBoard) {
            break;
          }
        } else {
          board.togglePiece(row,col);
        }
      }
    }
  };

  var newBoard = new Board({n: n});
  placePieces(newBoard, 0);




  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutionBoard.rows()));
  return solutionBoard.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionBoards = [];
  var solutionCount;
  var placePieces = function(board, row) {
    if(row === n - 1) {
      for(var col = 0; col < n; col++) {
        board.togglePiece(row, col);
        if(!board.hasAnyRooksConflicts()) {
          solutionBoards.push(board);
        }
        board.togglePiece(row, col);
      }
    } else {
      for(var col = 0; col < n; col++) {
        board.togglePiece(row,col);
        if(!board.hasAnyRooksConflicts()) {
          placePieces(board, row + 1);
        } 
        board.togglePiece(row,col);
      }
    }
  };

  var newBoard = new Board({n: n});
  placePieces(newBoard, 0);
  solutionCount = solutionBoards.length;




  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {


  var solutionBoard;
  var solution;
  var placePieces = function(board, row) {
    if(row === n - 1) {
      for(var col = 0; col < n; col++) {
        board.togglePiece(row, col);
        if(!board.hasAnyQueensConflicts()) {
          solutionBoard = board;
        } else {
          board.togglePiece(row, col);
        }
      }
    } else {
      for(var col = 0; col < n; col++) {
        board.togglePiece(row,col);
        if(!board.hasAnyQueensConflicts()) {
          placePieces(board, row + 1);
          if(solutionBoard) {
            break;
          }
        } 
        board.togglePiece(row,col);
      }
    }
  };

  var newBoard = new Board({n: n});
  placePieces(newBoard, 0);
  solution = solutionBoard ? solutionBoard.rows() : (new Board({n: n})).rows();


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if( n === 0 ) {
    return 1;
  }
  var solutionBoards = [];
  var solutionCount;
  var placePieces = function(board, row) {
    if(row === n - 1) {
      for(var col = 0; col < n; col++) {
        board.togglePiece(row, col);
        if(!board.hasAnyQueensConflicts()) {
          solutionBoards.push(board);
        }
        board.togglePiece(row, col);
      }
    } else {
      for(var col = 0; col < n; col++) {
        board.togglePiece(row,col);
        if(!board.hasAnyQueensConflicts()) {
          placePieces(board, row + 1);
        } 
        board.togglePiece(row,col);
      }
    }
  };

  var newBoard = new Board({n: n});
  placePieces(newBoard, 0);
  solutionCount = solutionBoards.length;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


window.countNQueensBitwise = function(n) {
  var ones = (1 << n) - 1;
  var solutionCount = 0;
  var navigateRows = function(left, right, col) {

  };
  navigateRows(0,0,0);
  return solutionCount;


}
