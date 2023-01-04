import { useState } from "react"


export default function CounterFunc() {
    const [counter, setCounter] = useState(0)
    return (
        <div style={{backgroundColor:'greenyellow',left:'100px',top:'200px',position:'absolute',height:'300px',width:'300px'}}>
            <div ><h1> This is functional component</h1></div>
            <button onClick={() => setCounter(counter + 1)} className="counterbutton">Inc</button>
            <span className="counter">{counter}</span>
            <button onClick={() => setCounter(counter - 1)} className="counterbutton">Dec </button>
            </div>
       
    )
}