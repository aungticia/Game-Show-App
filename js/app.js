/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

document.addEventListener('DOMContentLoaded', () => {
  // Create a new Game object when the DOM content is loaded
  const game = new Game();

  // Function to handle keyboard input
  const handleKeyboardInput = (event) => {
      // Check if the pressed key is a letter (a-z or A-Z) and not disabled
      if (/^[a-zA-Z]$/.test(event.key) && !event.target.disabled) {
          const letter = event.key.toLowerCase();
          const buttons = document.querySelectorAll('.key');
          // Find the on-screen keyboard button that matches the pressed letter
          const button = Array.from(buttons).find((btn) => btn.textContent === letter);

          if (button) {
              // Handle the interaction with the game for the selected letter
              game.handleInteraction(button);
          }
      }
  };

  // Event listener for the "Start Game" button
  const startButton = document.getElementById('btn__reset');
  startButton.addEventListener('click', () => {
      game.resetGame(); // Reset the game state if it's a new game
      game.startGame(); // Start a new game
  });

  // Event delegation for the on-screen keyboard buttons
  const qwerty = document.getElementById('qwerty');
  qwerty.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
          // Handle the interaction with the game for the clicked on-screen keyboard button
          game.handleInteraction(event.target);
      }
  });

  // Event listener for keyboard input to enable typing on the physical keyboard
  document.addEventListener('keydown', handleKeyboardInput);
});
