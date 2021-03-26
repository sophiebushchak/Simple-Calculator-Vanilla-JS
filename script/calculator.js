let inputMode = true;
let firstInput = true;
let currentNumber = '0';
let operatorNumber = '0';
let operator = null;

let numberDisplay = document.querySelector('.number-display');
let numberButtons = document.querySelectorAll('.btn-number');
let operatorButtons = document.querySelectorAll('.btn-operator');
let resultButton = document.querySelector('.btn-result');
let clearButton = document.querySelector('.btn-clear');
let backspacebutton = document.querySelector('.btn-back');

clearButton.addEventListener('click', () => {
    clear();
});

backspacebutton.addEventListener('click', () => {
    if (inputMode) {
        currentNumber = backspaceNumber(currentNumber);
        if (currentNumber === '') {
            currentNumber = '0';
        }
        numberDisplay.innerText = currentNumber;
    } else {
        operatorNumber = backspaceNumber(operatorNumber);
        if (operatorNumber === '0') {
            operatorNumber = '0';
        }
        numberDisplay.innerText = operatorNumber;
    }
    debugState();
});


for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        if (inputMode === true) {
            if (firstInput === false) {
                clear();
            }
            if (currentNumber !== '0') {
                currentNumber += numberButtons[i].innerText;
            } else {
                currentNumber = numberButtons[i].innerText;
                if (firstInput === false) {
                    firstInput = true;
                }
            }
            numberDisplay.innerText = currentNumber;
        } else {
            if (operatorNumber !== '0') {
                operatorNumber += numberButtons[i].innerText;
            } else {
                operatorNumber = numberButtons[i].innerText;
            }
            numberDisplay.innerText = operatorNumber;
        }
        debugState();

    });
}

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        operator = operatorButtons[i].innerText;
        inputMode = false;
        numberDisplay.innerText = operatorNumber;
        debugState();
    });
}

resultButton.addEventListener('click', () => {
    if (operator !== null) {
        calculate(operator);
    }
});

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
};

const backspaceNumber = (numberDisplay) => {
    return numberDisplay.slice(0, -1);
};

const clear = () => {
    currentNumber = '0';
    operatorNumber = '0';
    inputMode = true;
    firstInput = true;
    numberDisplay.innerText = currentNumber;
};

const calculate = (operatorSign) => {
    const operation = getOperation(operatorSign);
    currentNumber = operation(parseInt(currentNumber), parseInt(operatorNumber)).toString();
    numberDisplay.innerText = currentNumber;
    operator = null;
    operatorNumber = '0';
    inputMode = true;
    firstInput = false;
    debugState();
};

const multiply = (number1, number2) => {
    return number1 * number2;
};

const add = (number1, number2) => {
    return number1 + number2;
};

const substract = (number1, number2) => {
    return number1 - number2;
};

const divide = (number1, number2) => {
    return number1 / number2;
};

const debugState = () => {
    console.log({
        inputMode: inputMode,
        firstInput: firstInput,
        currentNumber: currentNumber,
        operatorNumber: operatorNumber,
        operator: operator,
    });
};

