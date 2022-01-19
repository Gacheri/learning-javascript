let randomNumber = Math.floor(Math.random() * 100) +1

const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowHigh = document.querySelector('.lowHigh')

const guessSubmit = document.querySelector('.guessSubmit')
const guessField = document.querySelector('.guessField')

let guessCount = 1
let resetButton
console.log(randomNumber)

function checkGuess(){
    alert('Test the function')
}
