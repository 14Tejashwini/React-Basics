import React, { useState } from 'react'

const UseStateHook1 = () => {

    //Array Destructuring
    const [marks,setMarks]=useState(5);
  return (
    <div>
        <h1>Marks={marks}</h1>
        <button onClick={()=>{setMarks(marks+1)}}>Increment</button>
    </div>
  )
}

export default UseStateHook1