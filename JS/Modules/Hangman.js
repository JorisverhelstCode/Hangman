import * as Elements from "./DataFetcherModule.js";
 
export class HangmanGame{
    constructor(word, guesses, lives, score){
        this.Word = word ? word : "";
        this.GuessedLetters = guesses ? guesses : [];
        this.Lives = lives ? lives : 7;
        this.Score = score ? score: 0;
        this.UpdateImage();
    }

    Guess (letter) {
        if (letter.length != 1){
            Elements.LblResponse.innerText = "Please enter a single letter!";
        } else {
            if (this.GuessedLetters.includes(letter)) {
                Elements.LblResponse.innerText = "You have already guessed this letter, please try another one!";
            } else {
                if (this.Word.includes(letter)){
                    if (this.Word == this.GuessedLetters){
                        this.Score++;
                        Elements.LblScore.innerText = "Score: " + Score;
                        //Change Response & Word    
                    } else {
                        //Change Response & Word
                    }
                } else{
                    this.Lives--;
                    if (this.Lives == 0){
                        //Change Response message
                    }
                    //Change Response message
                }
            }
        }
    }

    SetNewWord() {
        //API Call
        this.UpdateWord();
        this.GuessedLetters = [];
        this.Lives = 7;
        Elements.LblTriesLeft.innerText = "Tries left: " + this.Lives;
        Elements.LblGuessedLetters.innerText = GuessedLettersInWordForm;
    }

    UpdateWord() {
        var WordText = "";
        this.Word.forEach(letter => {
            if (this.GuessedLetters.includes(letter)){
                WordText += letter;
            } else {
                WordText += "_";
            }
            WordText += " ";
        });
        Elements.LblWord.innerText = WordText;
    }
    
    UpdateImage(){
        Elements.ImgFigure.src = "Images/Hangman" + (8 - this.Lives) + ".jpg";
    }
}