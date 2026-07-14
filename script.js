function add(number1, number2) {
  return number1 + number2
}

function subtract(number1, number2) {
  return number1 - number2
}

function multifly(number1, number2) {
  return number1 * number2
}

function devide(number1, number2) {
  return number1 / number2
}
function operate(number1, operator, number2) {
  switch (operator) {
    case '+':
      add(number1, number2);
      break;
    case '-':
      subtract(number1, number2);
      break;
    case '*':
      multifly(number1, number2);
      break;
    case '/':
      devide(number1, number2);
      break;
  }
}

let tempDisplay = ''

function addkey(key) {
  tempDisplay += key
}

const btnNumbers = document.querySelectorAll(".number")
for (let button of btnNumbers) {
  button.addEventListener('click', () => {
    addkey(button.id)
    displayResult.textContent = tempDisplay
})
}
const displayResult = document.querySelector("#display")


