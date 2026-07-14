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
function caculate(number1, operator, number2) {
  switch (operator) {
    case 'add':
      return add(number1, number2);
    case 'subtract':
      return subtract(number1, number2);
    case 'multifle':
      return multifly(number1, number2);
    case 'devide':
      return devide(number1, number2);
  }
}

let tempDisplay = '';
let result = 0;
let number1;
let number2;
let operator;

function reset() {
  number1 = undefined
  number2 = undefined
}

function addkey(key) {
  tempDisplay += key
}

function updateDisplay() {
  if (tempDisplay === '') {
    displayResult.textContent = '0'
  } else {
    displayResult.textContent = tempDisplay
  }
}

const btnNumbers = document.querySelectorAll(".number")
for (let button of btnNumbers) {
  button.addEventListener('click', () => {
    addkey(button.id)
    updateDisplay()
  })
}
const displayResult = document.querySelector("#display")

const clearBtn = document.querySelector("#clear")
clearBtn.addEventListener('click', () => {
  tempDisplay = "";
  updateDisplay()
  reset()
})





const addBtn = document.querySelector('#add')
addBtn.addEventListener('click', () => {
  if (number1 === undefined) {
    number1 = Number(tempDisplay);
    tempDisplay = ''
    operator = 'add'
  } else {
    number2 = Number(tempDisplay)
    result = caculate(number1, 'add', number2)
    tempDisplay = String(result)
    updateDisplay()
    tempDisplay = ''
    reset()
  }
})


const caculateBtn = document.querySelector("#caculate")
caculateBtn.addEventListener('click', () => {
  if (number1 === undefined) {
    number1 = Number(tempDisplay);
    result = number1;
    reset()
  } else {
    number2 = Number(tempDisplay)
    result = caculate(number1, operator, number2)
    tempDisplay = String(result)
    updateDisplay()
    tempDisplay=''
    reset()
  }
})