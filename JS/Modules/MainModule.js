import { HangmanGame } from "./Hangman";
import { Load } from "./DataFetcherModule";

Load();
var Game = new HangmanGame();
var LblScore = document.getElementById("LblScore");
var LblTriesLeft = document.getElementById("LblTriesLeft");
var BtnNewWord = document.getElementById("BtnNewWord");
var LblWord = document.getElementById("LblWord");
var LblGuessedLetters = document.getElementById("LblGuessedLetters");
var FieldGuess = document.getElementById("FieldGuess");
var LblResponse = document.getElementById("LblResponse");
var BtnGuess = document.getElementById("BtnGuess");

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