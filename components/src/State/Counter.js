import React, { Component } from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state={
            marks: 5
        }
    }

    inc(){
        // this.setState({
        //     marks: this.state.marks+1
        // },()=>{
        //     console.log("Callback")
        // })
        this.setState((previousState)=>({
            marks: previousState.marks+1
    }))
    }
    dec(){
        this.setState({
            marks: this.state.marks-1
        })
    }
    incFive(){
        this.inc()
        this.inc()
        this.inc()
        this.inc()
        this.inc()
    }
    render(){
        return(
            <div>
                <h1>Marks: {this.state.marks}</h1>
                <button onClick={()=>this.inc()}>Increment</button><br></br>
                <button onClick={()=>this.incFive()}>Inc by 5</button><br></br>
                <button onClick={()=>this.dec()}>Decrement</button>
            </div>
        )
    }
}

export default Counter