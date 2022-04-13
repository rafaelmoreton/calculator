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

backBtn.addEventListener("click", () => {
    displayText.textContent = displayText.textContent.slice(0, -1)
    if (displayText.textContent === "") {
        displayText.textContent = 0
    }
})

dotBtn.addEventListener("click", () => {
    if (/\./.test(displayText.textContent)) {
        return
    } else {
        displayText.textContent += "."
    }
})

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