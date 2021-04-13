// Write a function that takes a positive integer as an argument &
// returns a Boolean indicating whether the argument is a power of three.

// Hint: you might want to use recursion for this, which we haven't talked about yet. Exciting!

// 3, 9, 27, 81...

// Define UI Vars
const form = document.querySelector("#number-form");
const num = document.querySelector("#num");

// load event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", checkNum);
}

loadEventListeners();
let checker = num.value;
parseInt(checker);
//console.log(typeof checker);
console.log(checker);

// f() check number that the user inputs:
function checkNum(e) {
  if (num.value === "") {
    alert("Type and Integer to test");
  } else if (isNaN(num.value)) {
    alert("Integers only please");
  } else {
    console.log("isinteger");
    e.preventDefault();
  }
}

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
