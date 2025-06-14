
const btn = document.querySelector(".guessSubmit")
const pre_guess = document.querySelector(".guesses");
const remaing_attempt = document.querySelector(".lastResult");
const display = document.querySelector(".lowOrHi");
const i = document.querySelector("#guessField")
const startover = document.querySelector(".resultParas")

const p = document.createElement('p');

let random_number = Math.floor(Math.random() * 100) + 1;
console.log("rN: ", random_number); Math.floor(Math.random() * 100) + 1;
console.log("rN: ", random_number);
let arr = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(i.value)
        isValid(guess);
    }, false)
}

function isValid(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a valid number');
    }
    else {
        arr.push(guess);
        if (numGuess == 11) {
            displayGuess(guess);
            displayMessage(`Game over . Random number was ${random_number}`)
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
    if (random_number == guess) {
        displayMessage(`You guessed corrected`)
        endGame()
    } else if (guess < random_number) {
        displayMessage(`number is TOOOOO low  than random number`)
    } else {
        displayMessage(`number is TOOOOO high than random number`)
    }
}

function displayGuess(guess) {
    i.textContent = "";
    pre_guess.innerHTML = arr
    numGuess++;
    remaing_attempt.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message) {
    display.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    i.value = ''
    i.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> start new game</h2>`
    startover.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newgame = document.querySelector("#newGame");
    newgame.addEventListener("click", function () {
        random_number = Math.floor(Math.random() * 100) + 1;
        arr = [];
        numGuess = 1;
        pre_guess.innerHTML = ''
        remaing_attempt.innerHTML = `${11 - numGuess}`;
        i.removeAttribute('disabled');
        startover.removeChild(p);
        playGame = true;
    })
}















































            // let count = 0; 
            // function logic(e) {
            //     e.preventDefault();
            //     count++; 
            //     const value = parseInt(document.getElementById("guessField").value);         // taking value from input lable
            //     document.getElementById("guessField").value = "";                            // to make input lable empty automatically
            //     let pre_remain = parseInt(remaing_attempt.textContent);
            //     if (pre_remain != 0) {
            //         if (value == random_number) {
            //             display.innerHTML = "CORRECT GUESS"; 
            //              btn.disabled = true
                    
            //         } else {
            //             arr.push( value);                                             // push value in array
            //             pre_guess.textContent = arr;                                  // display array in pre_guess 
            //             pre_remain -= 1;
            //             remaing_attempt.textContent = pre_remain;                     // updating remainig attempt
            //         }
            //     } else {
            //         display.innerHTML = `Attempt Finished: Random Number is ${random_number}`;
            //            btn.disabled = true
            //     }

            // }
            // btn.addEventListener("click", logic);

