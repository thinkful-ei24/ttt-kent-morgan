/* global game */

// Listen for changes
  // Clicks on the board
  // New game button
// modify state
  // Play the move they clicked
  // Reset the board
  // Detect if the move won
// render new state
  // Translate the board array into our view

$(document).ready(function() {
  game.bindEventListeners();
  game.render();
});