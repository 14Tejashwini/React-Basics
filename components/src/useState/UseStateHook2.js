import React, { useState } from 'react'

const UseStateHook2 = () => {
    const initialmarks=5
    const [marks,setmarks]=useState(initialmarks);
    const incFive=()=>{
        for(let i=0;i<5;i++){
            setmarks(previousState=>previousState+1)
        }
    }
  return (
    <div>
        <h1>Marks={marks}</h1>
        <button onClick={()=>setmarks(marks+1)}>Increment</button>
        <button onClick={()=>setmarks(marks-1)}>Decrement</button>
        <button onClick={()=>setmarks(initialmarks)}>Reset</button>
        <button onClick={incFive}>Inc by 5</button>
    </div>
  )
}

export default UseStateHook2