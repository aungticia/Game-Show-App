/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
      // Initialize the game with zero missed attempts, an array of phrases, and no active phrase.
      this.missed = 0;
      this.phrases = [
          new Phrase('You Win'),
          new Phrase('Beautiful Girl'),
          new Phrase('Nice Weather'),
          new Phrase('I Love You'),
          new Phrase('Say Something')
      ];
      this.activePhrase = null;
  }

  getRandomPhrase() {
      // Generate a random phrase from the available phrases.
      const randomIndex = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[randomIndex];
  }

  startGame() {
      // Start the game by hiding the overlay and displaying the active phrase.
      const overlay = document.getElementById('overlay');
      overlay.style.display = 'none';

      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
  }

  handleInteraction(button) {
      // Handle user interaction with on-screen keyboard buttons.
      button.disabled = true;
      const letter = button.textContent;

      if (this.activePhrase.checkLetter(letter)) {
          // If the selected letter is in the phrase, mark it as chosen and reveal the letter.
          button.classList.add('chosen');
          this.activePhrase.showMatchedLetter(letter);
          if (this.checkForWin()) {
              // If the user has won, end the game with a win.
              this.gameOver(true);
          }
      } else {
          // If the selected letter is not in the phrase, mark it as wrong and remove a life.
          button.classList.add('wrong');
          this.removeLife();
      }
  }

  removeLife() {
      // Remove a life from the scoreboard and check if the player has lost the game.
      const hearts = document.querySelectorAll('.tries img');
      hearts[this.missed].src = 'images/lostHeart.png';
      this.missed++;
      if (this.missed === 5) {
          this.gameOver(false);
      }
  }

  checkForWin() {
      // Check if the player has won the game by determining if all letters have been revealed.
      const letters = document.querySelectorAll('.letter');
      return [...letters].every(letter => letter.classList.contains('show'));
  }

  gameOver(isWin) {
      // Display the game over screen and provide a win or lose message.
      const overlay = document.getElementById('overlay');
      overlay.style.display = 'flex';
      const message = document.getElementById('game-over-message');
      overlay.classList.remove('start', 'win', 'lose');
      overlay.classList.add(isWin ? 'win' : 'lose');
      message.textContent = isWin ? 'Congratulations! You won!' : 'Sorry, you lost. Try again!';
      this.resetGame();
  }

  resetGame() {
      // Reset the game to its initial state.
      const phraseList = document.querySelector('#phrase ul');
      phraseList.innerHTML = '';

      const keys = document.querySelectorAll('.key');
      keys.forEach((key) => {
          key.classList.remove('chosen', 'wrong');
          key.classList.add('key');
          key.disabled = false;
      });

      const hearts = document.querySelectorAll('.tries img');
      hearts.forEach((heart) => {
          heart.src = 'images/liveHeart.png';
      });

      this.missed = 0;
      this.activePhrase = null;
  }
}
