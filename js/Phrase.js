/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase  {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();

    };
    addPhraseToDisplay() {
        const phraseContainer = document.querySelector('#phrase ul');
        const phraseSplit = this.phrase.split('');
    
        let html = '';
    
        for (let i = 0; i < phraseSplit.length; i++) {
            if (phraseSplit[i] === ' ') {
                html += `
                    <li class='space'></li>
                `;
            } else {
                html += `
                    <li class='letter'>${phraseSplit[i]}</li>
                `;
            }
        }
    
        phraseContainer.insertAdjacentHTML('beforeend', html);
    }    

    checkLetter(letter) {
        return this.phrase.includes(letter);
    };

    showMatchedLetter(letter) {
        const letterElements = document.querySelectorAll('#phrase ul li');
        
        for (let i = 0; i < letterElements.length; i++) {
            if (letterElements[i].textContent === letter) {
                letterElements[i].classList.remove('hide');
                letterElements[i].classList.add('show');
            }
        }
    }    
     
};











