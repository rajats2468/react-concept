import { useImperativeHandle, useRef } from "react";
import React from "react";


const ChildRef = React.forwardRef(function ChildRef({dummy}, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            foc() {
                inputRef.current.focus();
            },
            Val(){
               return inputRef.current.value;
            }
        }
    })
    return (
        <>
            <h1>Ref Example</h1>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" ref={inputRef} />
        </>
    )
})
export default ChildRef;