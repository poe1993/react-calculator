import React, { useState } from 'react'

export function Calculator() {
  //create initial state for the display
  const [display, setDisplay] = useState(0.0)

  //create initial state for the first Number
  const [firstDigit, setFirstDigit] = useState('')

  //create initial state for the second Number
  const [secondDigit, setSecondDigit] = useState('')

  //create initial state for the Operand
  const [operand, setOperand] = useState(null)

  //stores information on the number clicked
  function clickedDigit(digit) {
    if (operand === null) {
      if (firstDigit.includes('.') && digit === '.') {
        //play a beep noise
      } else {
        setFirstDigit(`${firstDigit}${digit}`)
        setDisplay(`${firstDigit}${digit}`)
      }
    } else {
      if (secondDigit.includes('.') && digit === '.') {
        //play a beep noise
      } else {
        setSecondDigit(`${secondDigit}${digit}`)
        setDisplay(`${secondDigit}${digit}`)
      }
    }
  }

  //stores operand
  function clickedOperand(operand) {
    setOperand(operand)
  }

  // makes sum button useable and viewable
  function clickedEqualSign(sum) {
    if (operand === '+') {
      sum = Number(firstDigit) + Number(secondDigit)
      setDisplay(sum)
    }
    if (operand === '-') {
      sum = Number(firstDigit) - Number(secondDigit)
      setDisplay(sum)
    }
    if (operand === 'x') {
      sum = Number(firstDigit) * Number(secondDigit)
      setDisplay(sum)
    }
    if (operand === '÷') {
      sum = Number(firstDigit) / Number(secondDigit)
      setDisplay(sum)
    }
  }

  //makes the clear function useable and viewable
  function clickClearButton() {
    setFirstDigit('')
    setSecondDigit('')
    setOperand(null)
    setDisplay(0)
  }

  return (
    <main>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="button fn" onClick={clickClearButton}>
            AC
          </button>
          <button className="button fn">&#177;</button>
          <button className="button fn">&#37;</button>
          <button className="button op" onClick={() => clickedOperand('÷')}>
            &#247;
          </button>
          <button className="button" onClick={() => clickedDigit(7)}>
            7
          </button>
          <button className="button" onClick={() => clickedDigit(8)}>
            8
          </button>
          <button className="button" onClick={() => clickedDigit(9)}>
            9
          </button>
          <button className="button op" onClick={() => clickedOperand('x')}>
            &#215;
          </button>
          <button className="button" onClick={() => clickedDigit(4)}>
            4
          </button>
          <button className="button" onClick={() => clickedDigit(5)}>
            5
          </button>
          <button className="button" onClick={() => clickedDigit(6)}>
            6
          </button>
          <button className="button op" onClick={() => clickedOperand('-')}>
            &#8722;
          </button>
          <button className="button" onClick={() => clickedDigit(1)}>
            1
          </button>
          <button className="button" onClick={() => clickedDigit(2)}>
            2
          </button>
          <button className="button" onClick={() => clickedDigit(3)}>
            3
          </button>
          <button className="button op" onClick={() => clickedOperand('+')}>
            &#43;
          </button>
          <button className="button x2" onClick={() => clickedDigit(0)}>
            0
          </button>
          <button className="button" onClick={() => clickedDigit('.')}>
            .
          </button>
          <button className="button op" onClick={() => clickedEqualSign()}>
            &#61;
          </button>
        </div>
      </div>
    </main>
  )
}
