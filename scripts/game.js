// eslint-disable-next-line no-unused-vars

// Render functions
const game = (function(){
  const board = $('.board');

  const generateCell = function(cell, cellIndex) {
    return `
      <div class="cell" id="${cellIndex}">
        <p>${cell}</p>
      </div>
    `;
  };

  const render = function() {
    
  };
  
  return {
    render
  };
}());

// Event Listeners
