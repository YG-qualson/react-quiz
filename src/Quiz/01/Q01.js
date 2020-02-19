import React, { Component } from 'react'

export default class Q01 extends Component {
  state = {
    count: 0
  }

  componentDidMount() {
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    const { count } = this.state
    return (
      <>
        <h2>RESULT --> {count}</h2>
      </>
    )
  }
}
