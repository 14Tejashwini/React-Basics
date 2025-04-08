import React from 'react'

const Student1 = (props) =>{
    return(
        <div>
            <h1>Name:{props.name},Roll No:{props.usn}</h1>
            {props.children}
        </div>
    )
}

export default Student1