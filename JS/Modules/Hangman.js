import * as Elements from "./DataFetcherModule.js";
 
export class HangmanGame{
    constructor(word, guesses, lives, score){
        this.Word = word ? word : "";
        this.GuessedLetters = guesses ? guesses : [];
        this.Lives = lives ? lives : 7;
        this.Score = score ? score: 0;
        this.UpdateLives();
        this.UpDateScore();
    }

    Guess (letter) {
        if (letter.length != 1){
            this.SetResponse("Please enter a single letter!");
        } else {
            if (this.GuessedLetters.includes(letter)) {
                this.SetResponse("You have already guessed this letter, please try another one!");
            } else {
                this.GuessedLetters.push(letter);
                if (this.Word.includes(letter)){
                    if (this.Word == this.GuessedLetters){
                        this.Score++;
                        this.UpDateScore();
                        this.SetResponse("Congratulations you have found the word!");
                        this.UpdateWord();  
                    } else {
                        this.SetResponse(letter + " is indeed in the word!");
                        this.UpdateWord();
                    }
                } else{
                    this.Lives--;
                    if (this.Lives == 0){
                        this.SetResponse("Oh no you are out of lives :o");
                    } else{
                        this.SetResponse("Unfortunatly " + letter + " is not in the word we are looking for");
                    }
                    this.UpdateLives();
                    Elements.BtnGuess.style = "hidden";
                }
            }
        }
    }

    SetNewWord() {
        //API Call
        this.UpdateWord();
        this.GuessedLetters = [];
        this.Lives = 7;
        this.UpdateLives();
        Elements.LblGuessedLetters.innerText = GuessedLettersInWordForm;
        Elements.BtnGuess.style = "visible";
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
    
    UpdateLives(){
        Elements.LblTriesLeft.innerText = "Tries left: " + this.Lives;
        Elements.ImgFigure.src = "Images/Hangman" + (8 - this.Lives) + ".jpg";
    }

    SetResponse(text){
        Elements.LblResponse.innerText = text;
    }

    UpDateScore(){
        Elements.LblScore.innerText = "Score: " + this.Score;
    }
}