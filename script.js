console.log('Calculator Init')

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

let result = '0';

function updateScreen() {
    document.getElementById('result').textContent = result;
}

function clearScreen() {
    result = 0;
    updateScreen();
}

function printNumber(value) {
    if (result === '0') {
        result = value;
    } 
    else {
        result += value;
    }
    updateScreen();
}

