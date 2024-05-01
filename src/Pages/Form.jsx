import { useState } from "react";


export default function Form() {
    const [details, setDetails] = useState({ email: "", password: "" })

    function handleSubmit(e) {
        e.preventDefault();
        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd.entries())
        console.log(data)
        setDetails(data)
    }
    let userDetails = (<>
    <h4>User email: {details.email}</h4>
    <h4>User Password: {details.password}</h4>
    </>)
    return (
        <div>
            <h1>Form Example</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter email address..." />
                </div>
                <div>
                    <label htmlFor="password">password:</label>
                    <input type="text" id="password" name="password" placeholder="Enter password..." />
                </div>
                <div>
                    <button typeo="submit">Submit</button>
                </div>
            </form>
            {userDetails}
        </div>
    )
}