// eslint-disable-next-line no-unused-vars

// Render functions
const game = (function(){
  const board = $('.board');

  const generateCellElement = function(cellIndex) {
    return `
      <div class="cell" id="${cellIndex}">
        <p>${cellIndex}</p>
      </div>
    `;
  };

  };

  const generateBoardElement = function() {
    let board = '';

    for (let i=0; i<9; i++) {
      if (i % 3 === 0) board += '<div class="row">';
      board += generateCellElement(i);
      if (i % 3 === 0) board += '</div>';
    }

    return board;
  };

  const render = function() {
    const board = generateBoardElement();
  
    // insert that HTML into the DOM
    $('.board').html(board);
  };
  
  return {
    render
  };
}());

// Event Listeners
