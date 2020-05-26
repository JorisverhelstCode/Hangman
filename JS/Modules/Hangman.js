 export class HangmanGame{
    constructor(word, guesses, lives, score){
        this.Word = word ? word : "";
        this.GuessedLetters = guesses ? guesses : [];
        this.Lives = lives ? lives : 6;
        this.Score = score ? score: 0;
    }

    Guess (letter) {
        if (this.GuessedLetters.includes(letter)) {
            //Change Response message
        } else {
            if (this.Word.includes(letter)){
                if (this.Word == this.GuessedLetters){
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

    SetNewWord() {
        //API Call
        
        this.GuessedLetters = [];
        this.Lives = 6;
    }
    
}