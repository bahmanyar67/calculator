
var firstNumber = '';
var secondNumber = '';
var operator;
/*
 @todo: prevent multipul . in pressbotton function
*/

//step 1 and 3
function presButton(number) {
    if (operator === undefined) {
        firstNumber += number;
        document.getElementById('display').value = firstNumber;
    } else {
        secondNumber += number;
        document.getElementById('display').value = secondNumber;
    }
}
//step 2
function presOperator(localOperator) {
    operator = localOperator;
}
//step 4
function calculate() {

    if (operator == '+') {
        document.getElementById('display').value = parseFloat(firstNumber) + parseFloat(secondNumber)
    }
    if (operator == '-') {
        document.getElementById('display').value = firstNumber - secondNumber
    }
    if (operator == '*') {
        document.getElementById('display').value = firstNumber * secondNumber
    }
    if (operator == '%') {
        document.getElementById('display').value = firstNumber % secondNumber
    }
    if (operator == '/') {
        if (secondNumber == 0) {
            document.getElementById('display').value = '0'
        } else {
            document.getElementById('display').value = firstNumber / secondNumber
        }
    }
    console.log(firstNumber, operator, secondNumber);

    if (document.getElementById('display').value !== 0) {
        firstNumber = document.getElementById('display').value;
    }
    operator = undefined;
    secondNumber = '';
}
function clearall() {
    if (document.getElementById('display').value !== undefined) {
        document.getElementById('display').value = '0', firstNumber = '';
    }
}
function percentage() {
    secondNumber = (firstNumber * secondNumber) / 100;
    document.getElementById('display').value = secondNumber;
}

function clearLastNumber() {
    if (document.getElementById('display').value !== undefined) {
        document.getElementById('display').value = firstNumber.slice(0, -1);
        firstNumber = document.getElementById('display').value;
    }
}