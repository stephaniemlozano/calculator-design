const outputScreen = document.querySelector('.output')
const firstNumberEntered = document.querySelector('.first-num')
const secondNumberEntered = document.querySelector('.second-num')
const operation = document.querySelectorAll('.btn-operation')

function buttonAction() {
   document.querySelector('btn-action')
}

function buttonNumberKey() {
   document.querySelector('number-key')
}

function addOperation(x, y)      {return x + y}
function subtractOperation(x, y) {return x - y}
function multiplyOperation(x, y) {return x * y}
function divideOperation(x, y)   {return x / y}

if (operation === '+') {console.log(addOperation(Number(firstNumberEntered)), (Number(secondNumberEntered)))}
if (operation === '-') {console.log(subtractOperation(Number(firstNumberEntered)), (Number(secondNumberEntered)))}
if (operation === '*') {console.log(multiplyOperation(Number(firstNumberEntered)), (Number(secondNumberEntered)))}
if (operation === '/') {console.log(divideOperation(Number(firstNumberEntered)), (Number(secondNumberEntered)))}



/* Things to figure out:
   Getting the output to display in display area
   Get buttons working
   How to get it so decimal can only be clicked once in a number

*/