let displayText = document.querySelector(".display input")

const digits = document.querySelectorAll(".digits div button");
digits.forEach(digit => {
    digit.addEventListener("click", () => {
        inputDisplay()
    });
});

function inputDisplay() {
    console.log("Funciona")
}

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