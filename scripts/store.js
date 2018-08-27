// eslint-disable-next-line no-unused-vars

// State modification functions
const store = (function() {
  // let board = Array(9).fill(null);
  let board = ['X', null, 'X', 'O', 'O', null, 'X', 'O', null];
  let xIsNext = true;

  // Play a move
  const validateMove = function(id) {};
  const playMove = function(id) {
    // validate
    // play move logic
      // Check if winning move
      // Play move normally if not winning
    // flip player
  };
  const flipPlayer = function() {};
  // Check if the move is a winning move
  return {
    board,
    xIsNext
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