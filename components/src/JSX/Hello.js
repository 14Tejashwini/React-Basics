import React from 'react'

const Hello=()=>{
    // return(
    //     <div>
    //         <h1>Hello all</h1>
    //     </div>
    // )

    //return React.createElement('div',null,"Hi All")

    return React.createElement('div',null,React.createElement('h1',null,'Hi All'))
}

export default Hello