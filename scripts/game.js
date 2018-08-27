/* global store */
// eslint-disable-next-line no-unused-vars
const game = (function(){
  const generateCellElement = function(cellIndex) {
    let cells = store.board;
    // cells[cellIndex] !== null ? cells[cellIndex] : ''
    return `
      <div class="cell" id="${cellIndex}">
        <p>${cells[cellIndex] !== null ? cells[cellIndex] : '&nbsp;'}</p>
      </div>
    `;
  };

  const generateBoardElement = function() {
    let board = '';

    for (let i = 0; i < 9;) {
      board += '<div class="row">';
      // append 3 cells for every row
      for (let j = 0; j < 3; j++, i++) {
        board += generateCellElement(i);
      }
      board += '</div>';
    }

    return board;
  };

  const render = function() {
    const board = generateBoardElement();
  
    // insert that HTML into the DOM
    $('.board').html(board);
  };

  const handleCellClick = function () {
    $('.board').on('click', '.cell', (e) => {
      // Grab cell number
      let cellIndex = e.currentTarget.id;
      // Modify this cell in the store
      store.playMove(cellIndex);
      // render changes
      render();
    });
  };

  const bindEventListeners = function() {
    handleCellClick();
  };
  
  return {
    render,
    bindEventListeners
  };
}());

// Event Listeners
