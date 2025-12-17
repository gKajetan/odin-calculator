console.log('Calculator Init');

// math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// calculator vars
let firstNumber = '';   // first/previously inputted number remembered by var
let currentNumber = ''; // currently inputting number, used with previous/first number
let currentOperator = null; // operator
// history vars
const historyList = document.querySelector('ul');

// update screen content
function updateScreen(value) {
    document.getElementById('result').textContent = value;
}

// button logic (arguments are taken from html's onclick)
function printNumber(value) {
    // IF clicked number OR dot
    if (!isNaN(value) || value === '.') {
        if (currentOperator === null) {
            // no operator = building first number
            firstNumber += value;
            updateScreen(firstNumber);
        }
        else {
            // IF there is operator, start building next number
            currentNumber += value;
            updateScreen(currentNumber);
        }
    }

    // IF clicked operator
    else if (['+', '-', '*', '/'].includes(value)) {
        // eval expression IF there is firstNumber, operator and currentNumber
        if (firstNumber !== '' && currentNumber !== '') {
            const equation = `${firstNumber} ${currentOperator} ${currentNumber}`;
            const result = operate(currentOperator, firstNumber, currentNumber).toString();

            addToHistory(equation, result);
            firstNumber = result;
            currentNumber = '';
        }
        currentOperator = value;
    }
    // IF '=' is clicked, display result
    else if (value === '=') {
        if (currentOperator !== null && currentNumber !== '') {
            const equation = `${firstNumber} ${currentOperator} ${currentNumber}`;
            const result = operate(currentOperator, firstNumber, currentNumber).toString();

            addToHistory(equation, result);
            firstNumber = result;
            currentNumber = '';
            currentOperator = null;
            updateScreen(firstNumber);
        }
    }
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if (b === 0) return "ERROR"; // dividing by zero
            return divide(a, b);
    }
}

// clear/reset screen 
function clearScreen() {
    firstNumber = '';
    currentNumber = '';
    currentOperator = null;
    updateScreen('0');
}

function addToHistory(eq, res) {
    const list = document.getElementById('historyList');
    const li = document.createElement('li');
    li.textContent = `${eq} = ${res}`;
    list.prepend(li); // add to start of the list
}