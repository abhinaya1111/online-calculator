const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
  // Update button text content to "AC"
  document.querySelector('#keys button:last-child').textContent = "AC";
}

function calculate() {
  try {
    // Consider using a math parser library for safe evaluation
    // Example using mathjs: https://mathjs.org/
    // const math = require('mathjs');
    // display.value = math.eval(display.value);
    
    // For basic calculations without a library
    let expression = display.value;
    expression = expression.replace(/÷/g, '/'); // Handle division symbol
    display.value = eval(expression); // Not recommended for security reasons
  } catch (error) {
    display.value = "Error";
  }
}
