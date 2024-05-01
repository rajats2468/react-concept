import { Link } from "react-router-dom";


export default function MainNavigation() {

    return (
        <div style={{ display: "flex", margin: "10px auto", padding: "20px" }}>
            <nav>
                <Link to={"/"}>Home</Link>
            </nav>
            <nav>
                <Link to={"/counter"}>Counter</Link>
            </nav>
            <nav>
                <Link to={"/context"}>Context</Link>
            </nav>
            <nav>
                <Link to={"/redux"}>Redux</Link>
            </nav>
            <nav>
                <Link to={"/ref"}>Ref</Link>
            </nav>
            <nav>
                <Link to={"/memo"}>Memo</Link>
            </nav>
            <nav>
                <Link to={"/axios"}>Axios</Link>
            </nav>
            <nav>
                <Link to={"/form"}>Form</Link>
            </nav>
        </div>
    )
}