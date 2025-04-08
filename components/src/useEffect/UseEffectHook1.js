import React, { useEffect,useState } from 'react'

export const UseEffectHook1 = () => {

    const[count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`Clicked ${count}`
    })
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Clicked: {count}</button>
    </div>
  )
}

export default UseEffectHook1