import { useState,useEffect } from "react";

function Just(){
    const[data,setData]=useState([]);
    useEffect(()=>{
        const fecthData=async ()=>{
            try {
                const response=await fetch('https://jsonplaceholder.typicode.com/todos');
                const result=await response.json()
                setData(result)
            } catch (error) {
                console.log("error",error);
            }
        }
        fecthData();
        return()=>{
            console.log("components is unmounted.cleanup here id needed.");
        };
    },[]);
    return(
        <div>
            <h2>Fetched data:</h2>
            <ul>
                {data.map(item=>(
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Just;


 