import { HangmanGame } from "./Hangman.js";
import * as Elements from "./DataFetcherModule.js";

var Game = new HangmanGame();


BtnGuess.addEventListener("click", BtnGuessOnClickEvent);
BtnNewWord.addEventListener("click", BtnNewWordOnClickEvent);

function BtnGuessOnClickEvent(){
    Game.Guess(FieldGuess.innerText);
}

function BtnNewWordOnClickEvent(){
    Game.SetNewWord();
}

export function UpdateScore(Score){
    LblScore.innerText = "Score: " + Score;
}

export function UpdateResponse(sentence){
    LblResponse.innerText = sentence;
}

export function UpdateWordField(word){
    LblWord.innerText = word;
}

export function UpdateLives(amount){
    LblTriesLeft.innerText = "Tries left: " + amount;
}

export function UpdateGuessedletters(GuessedLettersInWordForm){
    LblGuessedLetters.innerText = GuessedLettersInWordForm;
}