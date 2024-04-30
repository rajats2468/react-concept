import { useState } from "react"


export default function Counter() {

  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>increase by 1</button>
    </>
  )
}