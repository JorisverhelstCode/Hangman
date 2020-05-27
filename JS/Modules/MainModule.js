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