/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase  {

    // Constructor to initialize the Phrase object with a given phrase
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };

    // Method to add the phrase to the display
    addPhraseToDisplay() {
        const phraseContainer = document.querySelector('#phrase ul');
        const phraseSplit = this.phrase.split('');

        let html = '';

        // Loop through each character in the phrase
        for (let i = 0; i < phraseSplit.length; i++) {
            // Check if the character is a space and create an HTML list item accordingly
            if (phraseSplit[i] === ' ') {
                html += `
                    <li class='space'></li>
                `;
            } else {
                // Create an HTML list item for a letter
                html += `
                    <li class='letter'>${phraseSplit[i]}</li>
                `;
            }
        }

        // Add the generated HTML to the phrase container
        phraseContainer.insertAdjacentHTML('beforeend', html);
    }

    // Method to check if a letter is in the phrase
    checkLetter(letter) {
        return this.phrase.includes(letter);
    };

    // Method to reveal matched letters in the phrase
    showMatchedLetter(letter) {
        const letterElements = document.querySelectorAll('#phrase ul li');

        // Loop through each list item and check if it matches the provided letter
        for (let i = 0; i < letterElements.length; i++) {
            if (letterElements[i].textContent === letter) {
                // Remove 'hide' class and add 'show' class to reveal the letter
                letterElements[i].classList.remove('hide');
                letterElements[i].classList.add('show');
            }
        }
    }

};
