import { useRef } from "react";
import React from "react";
function Apps() {
 const nameRef = useRef()
 const ageRef = useRef()
  
    function submitHandler() {
    return alert("VALUE OF NAME::::" + nameRef.current.value)
      
    
    }
  
    return (
      <div className='test'>
       <form onSubmit={submitHandler}>
          <input type="text" name="name" ref={nameRef} />
          <input type="text" name="age" ref={ageRef} />
          <input type="submit" value="submit" />
          
        </form>
      </div >
  
  
    );
  }
  export default Apps