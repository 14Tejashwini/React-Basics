import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import { userContext } from '../App'

const ComponentB = () => {

    const user = useContext(userContext)

  return (
    <div>
        {user}
        {/* <ComponentC></ComponentC> */}
    </div>
  )
}

export default ComponentB