import { HangmanGame } from "./Hangman.js";
import * as Elements from "./DataFetcherModule.js";

var Game = new HangmanGame();


BtnGuess.addEventListener("click", BtnGuessOnClickEvent);
BtnNewWord.addEventListener("click", BtnNewWordOnClickEvent);

function BtnNewWordOnClickEvent(){
    Game.SetNewWord();
}

function BtnGuessOnClickEvent(){
    Game.Guess(FieldGuess.innerText);
}

