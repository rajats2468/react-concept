import { useRef, useState } from "react"
import ChildRef from "./ChildRef";


export default function RefExample(){
    const [name,setName] = useState('')
    const inputRef =  useRef();
    function handleFocus(){
        inputRef.current.foc();
        setName(inputRef.current.Val());
    }

    return(
        <div>
            <ChildRef ref={inputRef} dummy={"dummy"}/>
            <button onClick={handleFocus}>Focus</button>
            <h4>email:{name}</h4>
            
        </div>
    )
}