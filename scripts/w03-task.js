/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;

}
function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);

    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let addNumber1 = Number(document.querySelector('#subtract1').value);

    let addNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(addNumber1, addNumber2);

}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
 


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
 
    document.querySelector('#product').value = multiply(factor1, factor2);

}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide (number1, number2) {
    return number1 / number2;

}
function divideNumbers () {
    let dividend = Number(document.querySelector('#dividend').value);

    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', getTotal);

function getTotal(){
    let subtotal = Number(document.querySelector('#subtotal').value);
    const checkbox = document.querySelector('#member');
    const totalElemtnt = document.getElementById("total");
    if (checkbox.checked){
        subtotal = subtotal*.8;
        let total = subtotal.toFixed(2);
        totalElemtnt.innerHTML = `$${total}`;
    } 
    else {
        let total = subtotal.toFixed(2);
        totalElemtnt.innerHTML = `$${total}`;
    }

}



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const arrayElement = document.getElementById("array");
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
arrayElement.innerHTML = `${numbersArray}`;

/* Output Odds Only Array */
const oddsElement = document.getElementById("odds");
oddsElement.innerHTML = numbersArray.filter(number => number % 2 === 1);


/* Output Evens Only Array */
const evensElement = document.getElementById("evens");
evensElement.innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
const sumOfArrayElement = document.getElementById("sumOfArray");
sumOfArrayElement.innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
const multipliedElement = document.getElementById("multiplied");
multiplied.innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
const sumOfMultipliedElement = document.getElementById("sumOfMultiplied");
sumOfMultipliedElement.innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);