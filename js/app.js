/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    
    // Function to handle keyboard input
    const handleKeyboardInput = (event) => {
      if (/^[a-zA-Z]$/.test(event.key) && !event.target.disabled) {
        const letter = event.key.toLowerCase();
        const buttons = document.querySelectorAll('.key');
        const button = Array.from(buttons).find((btn) => btn.textContent === letter);
  
        if (button) {
          game.handleInteraction(button);
        }
      }
    };
  
    // Event listener for the "Start Game" button
    const startButton = document.getElementById('btn__reset');
    startButton.addEventListener('click', () => {
      game.resetGame(); // Reset the game state if it's a new game
      game.startGame();
    });
  
    // Event delegation for the onscreen keyboard buttons
    const qwerty = document.getElementById('qwerty');
    qwerty.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);
      }
    });
  
    // Event listener for keyboard input
    document.addEventListener('keydown', handleKeyboardInput);
  });
  