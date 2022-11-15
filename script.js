const numBtns = document.querySelectorAll('button.num_btns');
const operateBtns = document.querySelectorAll('button.operator_btns')
const decimalBtn = document.getElementById('decimal_btn')
const equalsBtn = document.getElementById('equals_btn')
const display = document.getElementById('display');
const operationDisplay = document.getElementById('operation_display')
const clearBtn = document.getElementById('clear_btn');
let newNum = false;

const calculations = {
    firstNum: 0,
    secNum: 0,
    operator: "",
    result: null
}

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "x") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}

numBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        display.innerHTML = +(calculations.firstNum + btn.innerHTML);
        calculations.firstNum = +(calculations.firstNum + btn.innerHTML);
    });;
});

decimalBtn.addEventListener('click', () => {
    let calcString = calculations.firstNum.toString();
    if (calcString.includes(".")) {
        return;
    } else {
        display.innerHTML = display.innerHTML + ".";
        calculations.firstNum = calculations.firstNum + ".";
    };
});

operateBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        calculations.operator = btn.innerHTML;
        operationDisplay.innerHTML = calculations.firstNum + " " + btn.innerHTML;
        calculations.secNum = calculations.firstNum;
        calculations.firstNum = 0;
    });
});

equalsBtn.addEventListener('click', () => {
    if (calculations.operator === "") {
        return;
    } else {
        if (calculations.operator === "/" && calculations.firstNum === 0) {
            alert("You cannot divide by zero...");
            clearAll();
        } else {
            operationDisplay.innerHTML = operationDisplay.innerHTML + ` ${calculations.firstNum} =`;
            result = operate(calculations.secNum, calculations.firstNum, calculations.operator);
            display.innerHTML = result;
            calculations.firstNum = result;
        };
    };
});

clearBtn.onclick = () => {
    clearAll();
};

function clearAll() {
    operationDisplay.innerHTML = "";
    display.innerHTML = 0;
    calculations.firstNum = 0;
    calculations.secNum = 0;
    calculations.operator = "";
};