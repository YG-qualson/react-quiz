import React, { Component } from 'react'

export default class Quiz03 extends Component {
  state = {
    count: 0
  }

  componentDidMount() {
    this.pullingViewCount(count => {
      this.setState({
        count
      })
    })
  }

  pullingViewCount = callback => {
    setInterval(() => {
      const count = callAPI()
      callback(count)
    }, 3000)
  }

  render() {
    const { count } = this.state
    return (
      <>
        <Title title="Iron man" />
        <ViewCount count={count} />
      </>
    )
  }
}

class Title extends Component {
  render() {
    console.log('Title rendered')

    const { title } = this.props
    return <h1>{title}</h1>
  }
}

class ViewCount extends Component {
  render() {
    console.log('ViewCount rendered')

    const { count } = this.props
    return <span>View: {count}</span>
  }
}

// dummy func & data (server)
let count = 0
function callAPI() {
  count = count + Math.floor(Math.random() * 9)

  return count
}
