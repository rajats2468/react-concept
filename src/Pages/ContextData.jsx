import { useContext } from "react"
import CounterContext from "../components/CounterContext";

export default function ContextData(){
    const conCtx = useContext(CounterContext);
    function handleIncrease(){
        conCtx.increase();
    }
    function handleDecrease(){
        conCtx.decrease();
    }
    return (
        <div>
            <h1>context example</h1>
            <h4>counter: {conCtx.counter}</h4>
            <div style={{display:"flex"}}>
                <button onClick={handleIncrease}>
                    increase
                </button>
                <button onClick={handleDecrease}>
                    decreae
                </button>
            </div>
        </div>
    )
}