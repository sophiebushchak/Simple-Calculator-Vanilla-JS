let inputMode = true;
let currentNumber = 0;
let operatorNumber = 0;
let operator = null;

let numberDisplay = document.querySelector(".number-display");
let numberButtons = document.querySelectorAll(".btn-number");
let operatorButtons = document.querySelectorAll('.btn-operator');
let resultButton = document.querySelector('.btn-result');
let clearButton = document.querySelector('.btn-clear');

clearButton.addEventListener('click', () => {
    clear();
})

for (let i = 0; i < numberButtons.length; i++) {
   numberButtons[i].addEventListener('click', () => {
       if (inputMode === true) {
           if (currentNumber !== 0) {
               currentNumber += numberButtons[i].innerText;
           } else {
               currentNumber = numberButtons[i].innerText;
           }
           numberDisplay.innerText = currentNumber;
       } else {
           if (operatorNumber !== 0) {
               operatorNumber += numberButtons[i].innerText;
           } else {
               operatorNumber = numberButtons[i].innerText;
           }
           numberDisplay.innerText = operatorNumber;
       }
   });
}

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        operator = operatorButtons[i].innerText;
        inputMode = false;
        numberDisplay.innerText = operatorNumber;
    })
}

resultButton.addEventListener('click', () => {
    if (operator !== null) {
        calculate(operator);
    }
})

const getOperation = (operator) => {
    let operationFunction;
    switch (operator) {
        case '÷': {
            operationFunction = divide;
            break;
        }
        case '×': {
            operationFunction = multiply;
            break;
        }
        case '-': {
            operationFunction = substract;
            break;
        }
        case '+': {
            operationFunction = add;
        }
    }
    return operationFunction;
}

const clear = () => {
    currentNumber = 0;
    operatorNumber = 0;
    inputMode = true;
    numberDisplay.innerText = currentNumber;
}

const calculate = (operator) => {
    const operation = getOperation(operator);
    currentNumber = operation(parseInt(currentNumber), parseInt(operatorNumber));
    numberDisplay.innerText = currentNumber;
    operator = null;
    operatorNumber = 0;
}

const multiply = (number1, number2) => {
    return number1 * number2;
}

const add = (number1, number2) => {
    return number1 + number2;
}

const substract = (number1, number2) => {
    return number1 - number2;
}

const divide = (number1, number2) => {
    return number1 / number2;
}

