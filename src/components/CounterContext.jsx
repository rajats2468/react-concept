import { createContext, useReducer } from "react";

const CounterContext = createContext({
    counter: 0,
    increase: () => { },
    decrease: () => { },
})
export default CounterContext;
function counterReducer(state, action) {
    switch (action.type) {
        case "increase":
            return state = state + 1;
        case "decrease":
            return state = state - 1;

        default:
            return state;


    }

}
export function CounterContextProvider({ children }) {
    const [counter, dispatchCounter] = useReducer(counterReducer, 0);

    function increase() {
        dispatchCounter({ type: "increase" });
    }
    function decrease() {
        dispatchCounter({ type: "decrease" })
    }
    const counterCTX = {
        counter: counter,
        increase,
        decrease
    }
    return (
        <CounterContext.Provider value={counterCTX}>{children}</CounterContext.Provider>
    )

}