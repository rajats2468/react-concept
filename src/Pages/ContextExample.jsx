import { CounterContextProvider } from "../components/CounterContext";
import ContextData from "./ContextData";

export default function ContextExample(){
    return(
        <CounterContextProvider>
            <ContextData/>
        </CounterContextProvider>
    )
}