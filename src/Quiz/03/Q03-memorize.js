import React, { Component, PureComponent } from 'react'

export default class Quiz03 extends Component {
  state = {
    count: 0,
    todos: []
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
    }, 100)
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

/**
 *
 * 방법 1
 *
 */
// class Title extends PureComponent {
//   render() {
//     console.log('Title rendered')

//     const { title } = this.props
//     return <h1>{title}</h1>
//   }
// }

/**
 *
 *  방법 2
 */
class Title extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.title === this.props.title) {
      return false
    }
    return true
  }
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
