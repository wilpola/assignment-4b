// This file houses the main application
// @Author
import { useState } from 'react'
import './App.scss'

function App() {
  // stores the operation selection
  const [operation, setOperation] = useState('Addition')
  const [equals, setEquals] = useState(0)

  const handleSelection = (e) => {
    setOperation(e.target.value)
    setEquals('')
  }

  const handleAddition = () => {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    if (num1 === '' || num2 === '') {
      alert('Please fill both of the numbers')
      return
    } else {
      let add = Number(num1) + Number(num2)
      setEquals(add)
    }
  }

  const handleSubtraction = () => {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    if (num1 === '' || num2 === '') {
      alert('Please fill both of the numbers')
      return
    } else {
      setEquals(Number(num1) - Number(num2))
    }
  }

  const handleMultiplication = () => {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    if (num1 === '' || num2 === '') {
      alert('Please fill both of the numbers')
      return
    } else {
      setEquals(Number(num1) * Number(num2))
    }
  }

  const handleDivision = () => {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    if (num1 === '' || num2 === '') {
      alert('Please fill both of the numbers')
      return
    } else {
      setEquals(Number(num1) / Number(num2))
    }
  }

  const handleIsEven = () => {
    let num1 = document.getElementById('num1').value

    if (num1 === '') {
      alert('Please choose a number')
      return
    } else {
      setEquals(Number(num1) % 2 === 0)
    }
  }

  // renders the app
  return (
    <div className="App">
      <h1> Simple Calculator app</h1>
      <select onChange={(e) => handleSelection(e)}>
        <option>Choose operation</option>
        <option>Addition</option>
        <option>Subtraction</option>
        <option>Multiplication</option>
        <option>Division</option>
        <option>isEven</option>
      </select>

      {operation === 'Addition' && (
        <div className="calculation-container">
          <h2> Addition</h2>
          <div className="input-group">
            <label htmlFor="num1">First number</label>
            <input placeholder="1st number" id="num1" type={'number'} />
          </div>
          <div className="input-group">
            <label htmlFor="num2">Second number</label>
            <input placeholder="2nd number" id="num2" type={'number'} />
          </div>
          <button onClick={() => handleAddition()}>Calculate</button>
          {equals}
        </div>
      )}

      {operation === 'Subtraction' && (
        <div className="calculation-container">
          <h2> Subtraction</h2>
          <div className="input-group">
            <label htmlFor="num1">First number</label>
            <input placeholder="1st number" id="num1" type={'number'} />
          </div>
          <div className="input-group">
            <label htmlFor="num2">Second number</label>
            <input placeholder="2nd number" id="num2" type={'number'} />
          </div>
          <button onClick={() => handleSubtraction()}>Calculate</button>
          {equals}
        </div>
      )}

      {operation === 'Multiplication' && (
        <div className="calculation-container">
          <h2> Multiplication</h2>
          <div className="input-group">
            <label htmlFor="num1">First number</label>
            <input placeholder="1st number" id="num1" type={'number'} />
          </div>
          <div className="input-group">
            <label htmlFor="num2">Second number</label>
            <input placeholder="2nd number" id="num2" type={'number'} />
          </div>
          <button onClick={() => handleMultiplication()}>Calculate</button>
          {equals}
        </div>
      )}

      {operation === 'Division' && (
        <div className="calculation-container">
          <h2> Division</h2>
          <div className="input-group">
            <label htmlFor="num1">First number</label>
            <input placeholder="1st number" id="num1" type={'number'} />
          </div>
          <div className="input-group">
            <label htmlFor="num2">Second number</label>
            <input placeholder="2nd number" id="num2" type={'number'} />
          </div>
          <button onClick={() => handleDivision()}>Calculate</button>
          {equals === 0 ? '' : equals}
        </div>
      )}

      {operation === 'isEven' && (
        <div className="calculation-container">
          <h2> Is your number even</h2>
          <div className="input-group">
            <label htmlFor="num1">First number</label>
            <input placeholder="1st number" id="num1" type={'number'} />
          </div>

          <button onClick={() => handleIsEven()}>Calculate</button>
          {equals === true && equals !== 0 ? "The number is even" : "The number is odd" }
        </div>
      )}
    </div>
  )
}

export default App
