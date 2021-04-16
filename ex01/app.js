// ORIGINAL SPEC:
// Write a function that takes a positive integer as an argument &
// returns a Boolean indicating whether the argument is a power of three.
// Hint: you might want to use recursion for this, which we haven't talked about yet. Exciting!
// 3, 9, 27, 81...

// Define UI Vars
const form = document.querySelector("#number-form");
const numberInput = document.querySelector("#number-input");
const bigGuess = document.querySelector("#guess");
const guessList = document.querySelector("#guess-list");
let recents = [];

// event listener is on the 'submit' part of the form.
form.addEventListener("submit", checkNum);

// f() checkNum - throws an alert() for an empty form or calls showNumber():
function checkNum(e) {
  e.preventDefault(); // not sure this is the best approach?
  if (numberInput.value === "") {
    alert("Type any Integer to test if it's a power of 3");
  } else {
    if (threePower(1, numberInput.value)) {
      //console.log("true");
      showNumber(true, numberInput.value);
    } else {
      //console.log("false");
      showNumber(false, numberInput.value);
    }
  }
}

// f() threePower - This function uses recurssion to check if the user input is a power of 3:
function threePower(step, guess) {
  if (guess < 3) {
    return false;
  } else if (guess == Math.pow(3, step)) {
    return true;
  } else if (guess > Math.pow(3, step)) {
    step += 1;
    return threePower(step, guess);
  } else if (guess < Math.pow(3, step)) {
    return false;
  }
}

// f() showNumber - takes in T/F if it is or is not threePower - displays accordingly:
function showNumber(isPower, guess) {
  if (isPower === true) {
    //color is Green!
    document.getElementById("guess").className = "steely-green";
  } else {
    //color is Red!
    document.getElementById("guess").className = "steely-red";
  }
  bigGuess.innerHTML = `<strong>${guess}</strong>`;
  listNums(guess, isPower);
}

// f() listNums - displays the recent 3 guesses you've done:
function listNums(guess, isPower) {
  let reply;
  if (isPower === true) {
    reply = "Yep.";
  } else {
    reply = "Nope.";
  }
  //let recents = [];
  let stack = recents.unshift(guess);
  console.log(stack);
  if (stack === 1) {
    guessList.innerHTML = `<tr><td id='first'>${guess}</td><td>${reply}</td></tr>`;
  } else if (stack === 2) {
    //console.log("through");
    //somehow insertBefore();
    let newGuess = `<tr><td id='second'>${guess}</td><td>${reply}</td></tr>`;
    let parentRow = document.getElementById("first").parentNode;
    let firstRow = document.getElementById("first");
    parentRow.insertBefore(newGuess, firstRow);
  } else if (stack === 3) {
    //somehow insertBefore();
  } else if (stack === 4) {
    recents.pop();
    //somehow insertBefore();
  }
  numberInput.value = "";
}
