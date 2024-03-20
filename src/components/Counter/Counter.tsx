import React, { useState } from "react"
import Button from "../Button/Button"
import { CounterWrapper, ButtonControl, Count } from "./styles"

function Counter() {
  const [count, setCount] = useState(0)

  const onMinus = () => {
    setCount(prevCount => prevCount - 1)
  }

  const onPlus = () => {
    setCount(prevCount => prevCount + 1)
  }

  const onMultiply = () => {
    setCount(prevCount => prevCount * 2)
  }

  const onDivide = () => {
    setCount(prevCount => prevCount / 2)
  }

  function moreThanTwo():boolean {
    if(count%1 ===0) return false;
    return true;
    // const numStr = count.toString()
    // const dotIndex = numStr.indexOf(".")
    // if (dotIndex === -1) {
    //   return false
    // } else {
    //   const decimalPlaces = numStr.length - dotIndex - 1
    //   return decimalPlaces > 2
    // }
  }

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <ButtonControl>
        <Button name="*" onClick={onMultiply} />
      </ButtonControl>
      <Count>{moreThanTwo() ? count.toFixed(2) : Math.floor(count)}</Count>
      {/* <Count>{count.toFixed(2)}</Count> */}
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
      <ButtonControl>
        <Button name="/" onClick={onDivide} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter
