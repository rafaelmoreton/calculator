let numberA;
let numberB;
let currentOperator;

let displayText = document.querySelector(".display");
displayText.textContent = "";

const digits = document.querySelectorAll(".digits div button");
digits.forEach(digit => {
    digit.addEventListener("click", () => {
        if (currentOperator !== undefined) {
            displayText.textContent = "" + digit.innerHTML
        } else displayText.textContent += digit.innerHTML;
    });
});

const operators = document.querySelectorAll(".operators div button");
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (numberA === undefined) {
            numberA = parseFloat(displayText.innerHTML);
            currentOperator = operator.innerHTML;
        } else {
            numberB = parseFloat(displayText.innerHTML);
            operate(numberA, currentOperator, numberB);
            numberA = parseFloat(displayText.textContent);
        };
    });
});

function add(a, b) {
    displayText.textContent = a + b;
    return;
};

function subtract(a, b) {
    displayText.textContent = a - b;
    return;
};

function multiply(a, b) {
    displayText.textContent = a * b;
    return;
};

function divide(a, b) {
    displayText.textContent = a / b;
    return;
};

function operate(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}