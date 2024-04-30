import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../components/CounterSlice";


export default function ReduxExample() {
    const counter= useSelector((state) => state.count.counter)
    console.log(counter)
    const dispatch = useDispatch();
    function handleIncrease(){
        dispatch(counterActions.increase())
    }
    function handleDecrease(){
        dispatch(counterActions.decrease(5))
    }
    return (
        <div>
            <h1>Redux Example</h1>
            <h4>{counter}</h4>
            <div style={{display:"flex"}} >
                <button onClick={handleIncrease}>increase</button>
                <button onClick={handleDecrease}>decreae</button>
            </div>
            
        </div>

    )
}