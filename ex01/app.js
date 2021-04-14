// Write a function that takes a positive integer as an argument &
// returns a Boolean indicating whether the argument is a power of three.

// Hint: you might want to use recursion for this, which we haven't talked about yet. Exciting!

// 3, 9, 27, 81...

// Define UI Vars
const form = document.querySelector("#number-form");
const numberInput = document.querySelector("#numberinput");

// load event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", checkNum);
}

loadEventListeners();

// f() checkNum - check number that the user inputs:
function checkNum(e) {
  if (numberInput.value === "") {
    alert("Type any Integer to test if it's a power of 3");
  } else {
    //console.log("isinteger");
    //listNums(numberInput.value);
    if (threePower(1, numberInput.value)) {
      console.log("true");
      //showNumber(True, numberInput.value);
    } else {
      console.log("false");
      //showNumber(False, numberInput.value);
    }
  }
}

// f() threePower - check that number is a power of 3:
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
// function showNumber(isPower, guess) {
//   if
// }

// f() listNums - displays the recent 3 guesses you've done:
function listNums() {
  // Create td element
  const td = document.createElement("td");
  // Add class
  td.className = "guess";
  // Create text node and append to li
  td.appendChild(document.createTextNode(checkNum.value));

  // Append td to tr in tbody
  taskList.appendChild(li);

  // Store in LS
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = "";

  e.preventDefault();
}
