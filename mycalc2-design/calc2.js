const displayScreen = () => {
   if (document.querySelector('.display').innerHTML <= "0")
        document.querySelector('.display').innerHTML = param1    
    else
        document.querySelector('.display').innerHTML += param1
        
   if (document.querySelector('.display').innerHTML == '+') {
      document.querySelector('.display').innerHTML = ''
      document.querySelector('.display').innerHTML += param1
      } 
         
   if (document.querySelector('.display').innerHTML == '-'){
      document.querySelector('.display').innerHTML = ''
      document.querySelector('.display').innerHTML += param1
         }
   if (document.querySelector('.display').innerHTML == '*'){
      document.querySelector('.display').innerHTML = ''
      document.querySelector('.display').innerHTML += param1
         }
   if (document.querySelector('.display').innerHTML == '/'){
      document.querySelector('.display').innerHTML = ''
      document.querySelector('.display').innerHTML += param1
         }
   }


const buttonsAction = (elementLocation) => document.querySelector(elementLocation)
const buttonNumberKey = (numberInput) => document.querySelector(numberInput)


const buttonOperation = (elementLocation) => {
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
   Get buttons working
   How to get it so decimal can only be clicked once in a number

*/