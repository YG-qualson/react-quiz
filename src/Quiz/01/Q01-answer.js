import React, { Component } from 'react'

export default class Q01 extends Component {
  state = {
    count: 0
  }

  handleClick = () => {
    for (let i = 0; i < 20; i++) {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        }
      })
    }
  }

  componentDidMount() {}

  render() {
    const { count } = this.state
    return (
      <>
        <h2>RESULT --> {count}</h2>

        <button onClick={this.handleClick}>START</button>
      </>
    )
  }
}
