/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
          new Phrase('You Win'),
          new Phrase('See You'),
          new Phrase('Not Today'),
          new Phrase('I Love You'),
          new Phrase('Say Something')
        ];
        this.activePhrase = null;
      }
    
      getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
      }
    
      startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
      }
  
      handleInteraction(button) {
        button.disabled = true;
        const letter = button.textContent;
      
        if (this.activePhrase.checkLetter(letter)) {
          button.classList.add('chosen');
          this.activePhrase.showMatchedLetter(letter);
          if (this.checkForWin()) {
            this.gameOver(true);
          }
        } else {
          button.classList.add('wrong');
          this.removeLife();
        }
      }      
  
    removeLife() {
      const hearts = document.querySelectorAll('.tries img');
      hearts[this.missed].src = 'images/lostHeart.png';
      this.missed++;
      if (this.missed === 5) {
        this.gameOver(false);
      }
    }
  
    checkForWin() {
        const letters = document.querySelectorAll('.letter');
        return [...letters].every(letter => letter.classList.contains('show'));
      }      
      
  
    gameOver(isWin) {
      const overlay = document.getElementById('overlay');
      overlay.style.display = 'flex';
      const message = document.getElementById('game-over-message');
      overlay.classList.remove('start', 'win', 'lose');
      overlay.classList.add(isWin ? 'win' : 'lose');
      message.textContent = isWin ? 'Congratulations! You won!' : 'Sorry, you lost. Try again!';
      this.resetGame();
    }
  
    resetGame() {
        // Remove all li elements from the Phrase ul element
        const phraseList = document.querySelector('#phrase ul');
        phraseList.innerHTML = '';
    
        // Enable all of the onscreen keyboard buttons and update their classes
        const keys = document.querySelectorAll('.key');
        keys.forEach((key) => {
          key.classList.remove('chosen', 'wrong');
          key.classList.add('key');
          key.disabled = false;
        });
    
        // Reset all of the heart images in the scoreboard
        const hearts = document.querySelectorAll('.tries img');
        hearts.forEach((heart) => {
          heart.src = 'images/liveHeart.png';
        });
    
        // Reset missed count and activePhrase
        this.missed = 0;
        this.activePhrase = null;
      }
  }
  