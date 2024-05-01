import { memo, useMemo, useState } from "react"
const dummyFunction = () => {
    console.log("Memoized function")
}
const MemoizedDemmo = memo(dummyFunction)
export default function Memo() {
    const [counter, setCounter] = useState(0);
    const number = useMemo(()=>{
        console.log("memo function")
        return counter * counter
    },[counter])

    return (
        <>
            <h1>Memo Example</h1>
            <h4>{number}</h4>
            <h4>{counter}</h4>
            <button onClick={() => setCounter(counter)}>increase</button>
            <MemoizedDemmo/>
        </>
    )
}