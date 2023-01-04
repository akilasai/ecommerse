import { useState } from "react";
import './component/counter.css';
function State(){
const[name,setName]=useState("SLA")
const changeName=()=>{
    setName("hi hello welcome")
    
};
return(
    <div>
        <p>
            my name is {name}</p>
            <button onClick={changeName} id="common">Hit me</button>
    </div>
)


}
export default State