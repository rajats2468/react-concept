import axios from "axios";
import {  useEffect, useState } from "react"
import { useLoaderData } from "react-router";

export default function Axios() {
    const [userData, setUserData] = useState([]);
    // useEffect(() => {
    //     axios.get("https://dummyjson.com/users").then((res) => {
    //         setUserData(res.data.users)
    //     })
    // })
    const data = useLoaderData();
    useEffect(()=>{
        setUserData(data)
    },[])
    console.log(data)

    return (
        <div>
        <h1>User Details</h1>
        <ul style={{textAlign:"justify"}}>
            {userData.map((data)=>(
                <li key={data.id}>{data.firstName}</li>
            ))}
        </ul>

        </div>
    )
}

export function loader(){
    
    const result = axios.get("https://dummyjson.com/users").then((res) => {
        return res.data.users
    })
    return result;
}