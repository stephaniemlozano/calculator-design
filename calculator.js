class Calculator {
  constructor(firstNumberTextElement, secondNumberTextElement) {
    this.firstNumberTextElement = firstNumberTextElement
    this.secondNumberTextElement = secondNumberTextElement
    this.clear()
  }

  clear() {
    this.secondNumber = ''
    this.firstNumber = ''
    this.operation = undefined
  }

  delete() {
    this.secondNumber = this.secondNumber.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.secondNumber.includes('.')) return
    this.secondNumber = this.secondNumber.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.secondNumber === '') return
    if (this.firstNumber !== '') {
      this.compute()
    }
    this.operation = operation
    this.firstNumber = this.secondNumber
    this.secondNumber = ''
  }

  compute() {
    let computation
    const first = parseFloat(this.firstNumber)
    const second = parseFloat(this.secondNumber)
    if (isNaN(first) || isNaN(second)) return
    switch (this.operation) {
      case '+':
        computation = first + second
        break
      case '-':
        computation = first - second
        break
      case '*':
        computation = first * second
        break
      case '/':
        computation = first / second
        break
      default: 
        return
    }
    this.secondNumber = computation
    this.operation = undefined
    this.firstNumber = ''
  }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay 
        if(isNaN(integerDigits)) {
            let integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

  updateDisplay() {
    this.secondNumberTextElement.innerText = this.getDisplayNumber(this.secondNumber)
    if (this.operation != null) {
        this.firstNumberTextElement.innerText = `${this.getDisplayNumber(this.firstNumber)} ${this.operation}` 
    } else {
        this.firstNumberTextElement.innerText = ''
    }
  }
}

const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation]')
const equalBtn = document.querySelector('[data-equal]')
const deleteBtn = document.querySelector('[data-delete]')
const acBtn = document.querySelector('[data-ac]')
const percentBtn = document.querySelector('[data-percent]')
const firstNumberTextElement = document.querySelector('[data-firstnum]')
const secondNumberTextElement = document.querySelector('[data-secondnum]')

const calculator = new Calculator(
  firstNumberTextElement,
  secondNumberTextElement
)

numberBtn.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationBtn.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalBtn.addEventListener('click', (button) => {
  calculator.compute()
  calculator.updateDisplay()
})

acBtn.addEventListener('click', (button) => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteBtn.addEventListener('click', (button) => {
    calculator.delete()
    calculator.updateDisplay()
})

