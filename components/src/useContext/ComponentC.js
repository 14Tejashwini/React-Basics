import React from 'react'
import { userContext } from '../App'

const ComponentC = () => {
  return (
    <div>
        <userContext.Consumer>
            {
                user=>{
                    return(
                        <div>UserContext Value:{user}</div>
                    )
                }
            }
        </userContext.Consumer>
    </div>
  )
}

export default ComponentC