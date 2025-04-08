import React, { useState } from 'react'

const UseStateHook4 = () => {
    const [fruits,setFruits]=useState([])
    const [fruitinput,setFruitInput]=useState('')
    const addfruit=()=>{
        setFruits([...fruits,{id:fruits.length,value:fruitinput}])
        setFruitInput('')
    }
  return (
    <div>
        <input type="text" 
        value={fruitinput} 
        onChange={e=>setFruitInput(e.target.value)}></input>
        <button onClick={addfruit}>Add Fruit</button>
        <ul>
            {
                fruits.map((f)=>(
                    <li key={f.id}>{f.value}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default UseStateHook4