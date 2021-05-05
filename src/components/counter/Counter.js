import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
        console.log("constructor()")
        this.state = {
             count:0,
             memory:null
        }
    }
    // componentDidMount(){
    //     console.log("componentDidMount()")
    //    this.setState({ memory: setInterval(() => {
    //     this.setState({ count: this.state.count+1 });
    // }, 1000) });
    
       
    // }
    componentDidUpdate=()=>{
        console.log("componentDidUpdate()")
    }

    componentWillUnmount = () => {
        console.log("componentWillUnmount()")
        clearInterval(this.state.memory)
    }
    
    increment = () => {
        this.setState({ count:this.state.count+1  });
    }
    decrement = () => {
        if(this.state.count >0){
            this.setState({ count: this.state.count-1 })
        }
        else alert("Be careful")
    }
    
    render() {
        console.log("render()")
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Counter
