document.addEventListener('DOMContentLoaded', () => {
    // Declare game as a variable
    let game;
  
    // Function to handle keyboard input
    const handleKeyboardInput = (event) => {
      if (game) {
        // Check if the pressed key is a letter (a-z or A-Z) and not disabled
        if (/^[a-zA-Z]$/.test(event.key) && !event.target.disabled) {
          const letter = event.key.toLowerCase();
          const buttons = document.querySelectorAll('.key');
          const button = Array.from(buttons).find((btn) => btn.textContent === letter);
  
          if (button) {
            game.handleInteraction(button);
          }
        }
      }
    };
  
    // Event listener for the "Start Game" button
    const startButton = document.getElementById('btn__reset');
    startButton.addEventListener('click', () => {
      // Create a new Game instance
      game = new Game();
      game.resetGame(); // Reset the game state if it's a new game
      game.startGame(); // Start a new game
    });
  
    // Event delegation for the on-screen keyboard buttons
    const qwerty = document.getElementById('qwerty');
    qwerty.addEventListener('click', (event) => {
      if (game && event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);
      }
    });
  
    // Event listener for keyboard input to enable typing on the physical keyboard
    document.addEventListener('keydown', handleKeyboardInput);
  });
  