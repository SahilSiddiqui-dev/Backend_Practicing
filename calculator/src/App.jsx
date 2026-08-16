import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState('0')
  const [storedValue, setStoredValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [isWaitingForSecondValue, setIsWaitingForSecondValue] = useState(false)

  const clearCalculator = () => {
    setDisplay('0')
    setStoredValue(null)
    setOperator(null)
    setIsWaitingForSecondValue(false)
  }

  const inputDigit = (digit) => {
    if (isWaitingForSecondValue) {
      setDisplay(String(digit))
      setIsWaitingForSecondValue(false)
      return
    }

    setDisplay((prev) => (prev === '0' ? String(digit) : prev + digit))
  }

  const inputDecimal = () => {
    if (isWaitingForSecondValue) {
      setDisplay('0.')
      setIsWaitingForSecondValue(false)
      return
    }

    if (!display.includes('.')) {
      setDisplay((prev) => prev + '.')
    }
  }

  const calculate = (a, operation, b) => {
    switch (operation) {
      case '+':
        return a + b
      case '-':
        return a - b
      case '*':
        return a * b
      case '/':
        return b === 0 ? 'Error' : a / b
      default:
        return b
    }
  }

  const handleOperator = (nextOperator) => {
    const inputValue = Number(display)

    if (storedValue === null) {
      setStoredValue(inputValue)
    } else if (operator) {
      const result = calculate(storedValue, operator, inputValue)
      setStoredValue(result)
      setDisplay(String(result))
    }

    setOperator(nextOperator)
    setIsWaitingForSecondValue(true)
  }

  const handleEquals = () => {
    if (storedValue === null || operator === null) {
      return
    }

    const inputValue = Number(display)
    const result = calculate(storedValue, operator, inputValue)

    setDisplay(String(result))
    setStoredValue(null)
    setOperator(null)
    setIsWaitingForSecondValue(false)
  }

  return (
    <>
      <h1>Calculator</h1>
      <div>
        <input value={display} readOnly />
      </div>

      <div>
        <button onClick={() => inputDigit(7)}>7</button>
        <button onClick={() => inputDigit(8)}>8</button>
        <button onClick={() => inputDigit(9)}>9</button>
        <button onClick={() => handleOperator('/')}>/</button>
      </div>

      <div>
        <button onClick={() => inputDigit(4)}>4</button>
        <button onClick={() => inputDigit(5)}>5</button>
        <button onClick={() => inputDigit(6)}>6</button>
        <button onClick={() => handleOperator('*')}>*</button>
      </div>

      <div>
        <button onClick={() => inputDigit(1)}>1</button>
        <button onClick={() => inputDigit(2)}>2</button>
        <button onClick={() => inputDigit(3)}>3</button>
        <button onClick={() => handleOperator('-')}>-</button>
      </div>

      <div>
        <button onClick={inputDecimal}>.</button>
        <button onClick={() => inputDigit(0)}>0</button>
        <button onClick={handleEquals}>=</button>
        <button onClick={() => handleOperator('+')}>+</button>
      </div>

      <div>
        <button onClick={clearCalculator}>Clear</button>
      </div>
    </>
  )
}

export default App
