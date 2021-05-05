import React, { Component } from 'react'
import Counter from './components/counter/Counter'

export class App extends Component {
  state={
    isShow : false
  }
  toggle = () => {
    this.setState({isShow:!this.state.isShow})
  }
  render() {

    return (
      <div style={{textAlign:"center",marginTop:"250px"}}>
        <button onClick={this.toggle} >{this.state.isShow ? "Hide" : "Show"}</button> <br/>
        {
          this.state.isShow === true ? <Counter/> : "Show the counter"
        }
      </div>
    )
  }
}

export default App
