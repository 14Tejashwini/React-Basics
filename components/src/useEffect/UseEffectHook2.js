import React, { useEffect, useState } from 'react'

const UseEffectHook2 = () => {
     const[count,setCount]=useState(0);
     const[name,setname]=useState("");
     useEffect(()=>{
        console.log("Updating doc title")
        document.title=`Clicked ${count}`
     },[count])
     //Function to render only when count value changes rather than inpput value changes
      return (
        <div>
            <input type='text' value={name} onChange={e=>setname(e.target.value)}></input>
            <button onClick={()=>setCount(count+1)}>Clicked: {count}</button>
        </div>
      )
}

export default UseEffectHook2