let numberA;
let numberB;
let currentOperator;
let eraseDisplay = false;

const digits = document.querySelectorAll(".digits div button");
const operators = document.querySelectorAll(".operators div button");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equals");

let displayText = document.querySelector(".display");
displayText.textContent = "0";

digits.forEach(digit => {
    digit.addEventListener("click", () => {
        if (displayText.textContent === "0" ||
            eraseDisplay === true) {
            displayText.textContent = digit.innerHTML;
            eraseDisplay = false;
        }
        else {
            displayText.textContent += digit.innerHTML;
        };
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (currentOperator === undefined) {
            currentOperator = operator.innerHTML;
            numberA = parseFloat(displayText.textContent);
        }
        else {
            numberB = parseFloat(displayText.textContent);
            displayText.textContent = operate(numberA, currentOperator,numberB);
            numberA = parseFloat(displayText.textContent);
            currentOperator = operator.innerHTML;
        };
        eraseDisplay = true;
    });
});

clearBtn.addEventListener("click", () => {
    displayText.textContent = "0";
    numberA = undefined;
    numberB = undefined;
    currentOperator = undefined;
    eraseDisplay = false;
});

equalBtn.addEventListener("click", () => {
    equals();
    eraseDisplay = true;
});

function equals() {
    if (currentOperator === undefined) {
        return;
    }
    else {
        numberB = parseFloat(displayText.textContent);
        displayText.textContent = operate(numberA, currentOperator, numberB);
        numberA = parseFloat(displayText.textContent);
        currentOperator = undefined;
    };
};

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
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