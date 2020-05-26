import { Load } from "./DataFetcherModule.js";
import { UpdateScore, UpdateResponse, UpdateWordField } from "./MainModule.js";
 
export class HangmanGame{
    constructor(word, guesses, lives, score){
        this.Word = word ? word : "";
        this.GuessedLetters = guesses ? guesses : [];
        this.Lives = lives ? lives : 6;
        this.Score = score ? score: 0;
    }

    Guess (letter) {
        if (letter.length != 1){
            UpdateResponse("Please enter a single letter!");
        } else {
            if (this.GuessedLetters.includes(letter)) {
                UpdateResponse("You have already guessed this letter, please try another one!");
            } else {
                if (this.Word.includes(letter)){
                    if (this.Word == this.GuessedLetters){
                        this.Score++;
                        UpdateScore();
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
        this.Lives = 6;
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
        UpdateWordField(WordText);
    }
    
}