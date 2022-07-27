const outputScreen = document.querySelector('.output').innerHTML
// const firstNumberEntered = document.querySelector('.first-num')
// const secondNumberEntered = document.querySelector('.second-num')
// const operation = document.querySelectorAll('.btn-operation')
// const equalsButton = document.querySelector('.btn-equal')
// const acButton = document.querySelector('.btn-ac')
// const delButton = document.querySelector('.btn-del')

function buttonsAction(elementLocation) {
   document.querySelector(elementLocation)
}


function buttonNumberKey(numberInput1, numberInput2) {
   document.querySelector(numberInput1, numberInput2)
}


function buttonOperation(elementLocation) {
   document.querySelector(elementLocation)

   function addOperation(x, y)      {return x + y}
   function subtractOperation(x, y) {return x - y}
   function multiplyOperation(x, y) {return x * y}
   function divideOperation(x, y)   {return x / y}
   
   if (operation === '+') {console.log(addOperation(Number(firstNumberEntered)), (Number(secondNumberEntered)))}
   if (operation === '-') {console.log(subtractOperation(Number(firstNumberEntered)), (Number(secondNumberEntered)))}
   if (operation === '*') {console.log(multiplyOperation(Number(firstNumberEntered)), (Number(secondNumberEntered)))}
   if (operation === '/') {console.log(divideOperation(Number(firstNumberEntered)), (Number(secondNumberEntered)))}
}


buttonsAction('.btn-ac')
buttonsAction('.btn-del')
buttonsAction('.btn-equal')
buttonNumberKey('.first-num')
buttonNumberKey('.second-num')
buttonOperations('.btn-operation')


/* Things to figure out:
   Getting the output to display in display area
   Get buttons working
   How to get it so decimal can only be clicked once in a number

*/