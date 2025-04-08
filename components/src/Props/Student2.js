import React, { Component } from 'react'

class Student2 extends Component{
    render(){
        return(
            <h1>Name:{this.props.name},USN:{this.props.usn}</h1>
        )
    }
}

export default Student2
