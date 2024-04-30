import { memo, useState } from "react"
const dummyFunction = () => {
    console.log("Memoized function")
}
const MemoizedDemmo = memo(dummyFunction)
export default function Memo() {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1>Memo Example</h1>
            <h4>{counter}</h4>
            <button onClick={() => setCounter(counter + 1)}>increase</button>
            <MemoizedDemmo/>
        </>
    )
}