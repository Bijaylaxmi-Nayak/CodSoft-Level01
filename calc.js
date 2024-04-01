let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
  if (currentInput === '0' && value !== '.') {
    currentInput = '';
  }
  currentInput += value;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}

function calculate() {
  try {
    let result = eval(currentInput);
    display.textContent = result;
    currentInput = result;
  } catch (error) {
    display.textContent = 'Error';
    currentInput = '';
  }
}
