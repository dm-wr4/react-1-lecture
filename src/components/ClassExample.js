import React, { Component } from 'react'
import FunctionExample from './FunctionExample'

class ClassExample extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
    }
  }

  handleCountIncrement() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {
    return (
      <div>
        <h1>THIS IS MY CLASS EXAMPLE</h1>
        <FunctionExample />
        <p>Current count: {this.state.counter}</p>
        <button onClick={() => this.handleCountIncrement()}>
          Change the count
        </button>
      </div>
    )
  }
}

export default ClassExample
