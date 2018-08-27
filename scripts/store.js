// eslint-disable-next-line no-unused-vars

// State modification functions
const store = (function() {
  // let board = Array(9).fill(null);
  let board = ['X', null, 'X', 'O', 'O', null, 'X', 'O', null];
  let xIsNext = true;
  const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 6],
    [0, 4, 8],
    [2, 4, 6]
  ]

  // Play a move
  const validateMove = function(id) {
    if (board[id]) {
      throw new Error('Invalid Move');
    }
  };
  const playMove = function(id) {
    try {
      validateMove(id);
      board[id] = xIsNext ? 'X' : 'O';
      console.log(checkWinningMove());
      xIsNext = !xIsNext;
    } catch(e) {
      console.log(e);
    }
  };

  const checkWinningMove = function() {
    const player = xIsNext ? 'X' : 'O';
    return winningMoves.reduce(function(isWinning, pattern) {
      if (!isWinning) {
        pattern.reduce(function(bool, pos) {
          if (bool) return board[pos] === player;
        }, true);
      } else {
        return true;
      }
    }, false);
  };
  // Check if the move is a winning move
  return {
    board,
    xIsNext,
    playMove
  };
}());

// Listen for changes
  // Clicks on the board
  // New game button
// modify state
  // Play the move they clicked
  // Reset the board
  // Detect if the move won
// render new state
  // Translate the board array into our view