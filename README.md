# Calculator
![Screenshot](/demo/demo-calculator.png)

This is a browser calculator made as an [assignment from The Odin Project](https://www.theodinproject.com/lessons/foundations-calculator) where I've got to use all the fundamentals of HTML, CSS and JavaScript.

## Demo
You can try it [here](https://rafaelmoreton.github.io/calculator/)

## Features
* Supports the four basic arithmetic operations (add, subtract, multiply and divide).
* Can be used with a mouse or a keyboard.
* Each pair of numbers are evaluated at a time when several operations are strung together.
* Uses it's own functions to evaluate operations instead of realying on `eval()` and it's dangers.

## Caveats
* The calculator is not absolutely accurate when dealing with big numbers.
* Unable to evaluate mathematical expressions (the first pair is evaluated as soon as a second operator is input).

## How to use
### Keyboard controls
* Either `,` or `.` can be used to input decimals.
* Either `=` or `enter` can be used to evaluate the current operation.
* The last number's digit can be deleted with `backspace`.
* The current number and operator can be cleared with either `delete` or `esc`.