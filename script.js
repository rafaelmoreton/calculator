let numberA;
let numberB;
let currentOperator;
let eraseDisplay = false;

const digits = document.querySelectorAll(".digits div button");
const operators = document.querySelectorAll(".operators div button");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equals");
const dotBtn = document.getElementById("dot");
const backBtn = document.getElementById("backspace");

let displayText = document.querySelector(".display");
displayText.textContent = "0";


// ######## Keyboard event listener ########
addEventListener("keydown", (event) => {

    // Digits
    if (event.key >= 0 && event.key <= 9) {
        insertDigit(event.key)
    }
    // Operators
    else if (event.key === "+" || event.key === "-" ||
    event.key === "*" || event.key === "/") {
        insertOperator(event.key)
    }
    // Dot
    else if (event.key === "." || event.key === ",") {
        insertDot();
    }
    // Equals
    else if (event.key === "=" || event.key === "Enter") {
        equals();
    }
    // Backspace
    else if (event.key === "Backspace") {
        backspace();
    }
    // Clear
    else if (event.key === "Delete" || event.key === "Escape") {
        clear();
    }
    // Disable other keys' press event to avoid bugs
    else {
        event.preventDefault()
    }
})


// ######## Buttons event listeners ########
digits.forEach(digit => {
    digit.addEventListener("click", () => insertDigit(digit.innerHTML));
});

operators.forEach(operator => {
    operator.addEventListener("click", () => insertOperator(operator.innerHTML));
});

backBtn.addEventListener("click", () => backspace());

dotBtn.addEventListener("click", () => insertDot());

clearBtn.addEventListener("click", () => clear());

equalBtn.addEventListener("click", () => equals());


// ######## Input functions ########
function insertOperator(operator) {
    if (currentOperator === undefined) {
        currentOperator = operator;
        numberA = parseFloat(displayText.textContent);
    }
    else {
        numberB = parseFloat(displayText.textContent);
        displayText.textContent = operate(numberA, currentOperator,numberB);
        numberA = parseFloat(displayText.textContent);
        currentOperator = operator;
    };
    eraseDisplay = true;
}

function insertDigit(digit) {
    if (displayText.textContent === "0" || eraseDisplay === true) {
        displayText.textContent = digit;
        eraseDisplay = false;
    } else {
        displayText.textContent += digit;
    };
};

function insertDot() {
    if (/\./.test(displayText.textContent)) {
        return
    } else {
        displayText.textContent += "."
    };
};

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
    eraseDisplay = true;
};

function backspace() {
    displayText.textContent = displayText.textContent.slice(0, -1)
    if (displayText.textContent === "") {
        displayText.textContent = 0
    };
};

function clear() {
    displayText.textContent = "0";
    numberA = undefined;
    numberB = undefined;
    currentOperator = undefined;
    eraseDisplay = false;
};

// ######## Math functions ########
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
    if (b === 0) {
        alert("Can't divide by 0")
        return 0
    }
    return a / b;
};

function operate(a, operator, b) {
    let result;
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
    }
        return result
}